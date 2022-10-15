import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  fonts,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    lineHeights,
    fontSizes,
    fontWeights,
    radii,
    space,
    fonts,
  },
})
