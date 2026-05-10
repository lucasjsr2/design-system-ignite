import 'styled-components'
import {
  defaultTheme,
  type DefaultTheme as TokensTheme,
} from '@lucasjsr/tokens'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TokensTheme {}
}

export {
  ThemeProvider,
  createGlobalStyle,
  css,
  keyframes,
  styled,
} from 'styled-components'

export { defaultTheme }
