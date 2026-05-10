# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

Design System Ignite is a Bun + Turborepo monorepo that publishes a React design system to npm under the `@lucasjsr/*` scope. The workspace lives entirely under `packages/`:

- `react` — published component library (styled-components + Radix UI + @phosphor-icons/react)
- `tokens` — published design tokens (colors, fonts, spacing, etc.) plus `defaultTheme` for the styled-components `ThemeProvider`
- `eslint-config` — shareable ESLint config (extends `@rocketseat/eslint-config/react`)
- `ts-config` — shared `tsconfig` bases (`base.json`, `react.json`)
- `docs` — Storybook 8 playground (private; deployed to GitHub Pages, not published)

Internal packages reference each other with the `"*"` workspace version (e.g. `"@lucasjsr/tokens": "*"`). Turborepo's `^build` dependency in [turbo.json](turbo.json) ensures dependency packages build before their dependents.

## Toolchain

- Bun (`packageManager` pinned at the root) is the package manager and script runner — there is no `npm`/`pnpm` in the workflow. CI installs with `bun install --frozen-lockfile`.
- Node `>=22` is the runtime engine. TypeScript `^6.0`, tsup `^8`, Vite `^5`, Storybook `^8.6`, React `^19`.
- [bunfig.toml](bunfig.toml) sets `linker = "hoisted"` so ESLint can resolve `@rocketseat/eslint-config`'s transitive plugins from each package's perspective. Without this Bun installs into `node_modules/.bun/<hash>` and ESLint plugin lookup fails.

## Common commands

Run from the repo root unless noted:

```bash
bun install                  # install all workspaces
bun run dev                  # turbo run dev --parallel (watches every package + Storybook)
bun run build                # build every package (respects ^build dependency order)
bun run lint                 # turbo run lint -- eslint --fix per package

# changesets (version + publish flow)
bun run changeset            # author a changeset describing the version bump
bun run version-packages     # apply changesets, bump versions, update CHANGELOG.md
bun run release              # build docs filter + changeset publish (used by CI)
```

Per-package commands (run inside `packages/<name>` or via `bun run <script> --filter <package>`):

```bash
# packages/react and packages/tokens
bun run build                # tsup build (esm + cjs + .d.ts)
bun run dev                  # tsup --watch
bun run lint                 # eslint src/**/*.ts* --fix

# packages/docs
bun run dev                  # storybook dev -p 6006
bun run build                # storybook build -> storybook-static/
bun run deploy-storybook     # publish storybook-static to GitHub Pages
```

There is no test runner configured. Don't claim tests pass; don't add the first test framework without asking.

## Architecture notes

### Styling — styled-components with a single source of truth

[packages/tokens/src/index.ts](packages/tokens/src/index.ts) exports `defaultTheme` (and a `DefaultTheme` type alias) that the React package imports and feeds into `<ThemeProvider>`. [packages/react/src/styles/index.ts](packages/react/src/styles/index.ts) augments styled-components' built-in `DefaultTheme` interface so every `theme` argument inside a `styled\`...\`` block is fully typed:

```ts
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TokensTheme {}
}
```

The `eslint-disable` comment is load-bearing — module augmentation requires `interface ... extends`, which the lint config would otherwise rewrite to `type DefaultTheme = ...` (breaking the merge).

This module is re-exported from [packages/react/src/index.tsx](packages/react/src/index.tsx), so consumers can import `ThemeProvider`, `defaultTheme`, `styled`, `css`, `keyframes`, and `createGlobalStyle` directly from `@lucasjsr/react`.

### Component file convention

Each component is a folder under [packages/react/src/components/](packages/react/src/components/) with two files:

- `index.tsx` — exports the component and its `*Props` type, sets `Component.displayName`
- `styles.ts` — styled-components definitions

Box, Text, Heading, Button, and TextArea live as single-file components at the top level of `components/` because they don't wrap a Radix primitive.

The component must be re-exported from [packages/react/src/index.tsx](packages/react/src/index.tsx) (the single entry consumed by `tsup`). Forgetting this means it will not ship in the published bundle.

Most other components wrap a Radix UI primitive (`@radix-ui/react-avatar`, `react-checkbox`, `react-toast`, `react-tooltip`) and expose `ComponentProps<typeof StyledRoot>` extended with the component's own props. Match this pattern for consistency and to preserve Radix's accessibility behavior.

### Variant API uses transient props

styled-components has no built-in variant API, so size/variant/active props are exposed as **transient** (`$`-prefixed): `$variant`, `$size`, `$active`. Transient props don't leak to the DOM, and inside the styled block they are read directly from the props bag:

```tsx
export const Button = styled.button<{ $variant?: ButtonVariant; $size?: ButtonSize }>`
  ${({ $variant = 'primary' }) => buttonVariants[$variant]}
  ${({ $size = 'md' }) => buttonSizes[$size]}
`
```

This is a public API change from the Stitches era (the props were `variant` and `size` without the `$`). When adding new variants, mirror this pattern; when migrating consumer code or stories, the `$` prefix is required.

### Tokens package shape

[packages/tokens/src/](packages/tokens/src/) exports flat objects per category (`colors`, `fontSizes`, `fontWeights`, `lineHeights`, `radii`, `space`, `fonts`) plus the assembled `defaultTheme`. Adding a token is a two-step change: add it to the relevant per-category file, then it's automatically available as `theme.<category>.<key>` inside any `styled\`...\`` template.

### Build output (tsup)

`react` and `tokens` build with `tsup src/index.tsx --format esm,cjs --dts --external react --external react-dom`. Both `react` and `react-dom` are externalized so they remain peerDependencies. `package.json` declares `main` (cjs), `module` (esm), and `types` pointing at `dist/`.

### Storybook 8 layout

The docs package uses `@storybook/react-vite` (combined framework + builder). [packages/docs/.storybook/](packages/docs/.storybook/) contains:

- `main.ts` — typed `StorybookConfig`
- `manager.ts` — UI theme overrides (imports from `@storybook/manager-api`/`@storybook/theming`)
- `preview.tsx` — global decorators; the **ThemeProvider decorator** wraps every story in `<ThemeProvider theme={defaultTheme}>` so styled-components theme functions resolve

When adding a story, place it in `src/stories/` with a `.stories.tsx` extension. Documentation pages live in `src/pages/` as plain `.mdx` files using `import { Meta } from '@storybook/blocks'` (CSF doc files were removed in SB8).

### Releases via Changesets

[`.github/workflows/release.yml`](.github/workflows/release.yml) runs on every push to `main` using `oven-sh/setup-bun@v2` + `actions/setup-node@v4` (Node 22). It builds, then `changesets/action` either opens a "Version Packages" PR (if pending changesets exist) or publishes to npm (if versions were already bumped). [`.changeset/config.json`](.changeset/config.json) ignores `@lucasjsr/docs` so the Storybook package is never published. To ship a change to a published package, always include a changeset (`bun run changeset`) in the same PR.

The Storybook docs site is deployed by a separate workflow ([deploy-docs.yml](.github/workflows/deploy-docs.yml)) and uses `viteFinal` in [main.ts](packages/docs/.storybook/main.ts) to set `base = '/design-system-ignite'` for the GitHub Pages subpath.

## Conventions specific to this repo

- ESLint config extends `@rocketseat/eslint-config/react`. Run `bun run lint` at the root or inside the package.
- TypeScript is strict via [packages/ts-config/base.json](packages/ts-config/base.json) (`module: ESNext`, `moduleResolution: Bundler`, `target: ES2022`, with `ignoreDeprecations: "6.0"` to silence baseUrl/node10 warnings emitted from tsup's dts pipeline). Each package's `tsconfig.json` extends one of those bases.
- Icons come from `@phosphor-icons/react` only (the older `phosphor-react` package was deprecated in 2022).
- Toast renders its own `<Toast.Provider>` + `<Toast.Viewport>` inside the `Toast` component. If you need multiple toasts or external control, that pattern will need refactoring — flag it rather than silently changing the public API.
