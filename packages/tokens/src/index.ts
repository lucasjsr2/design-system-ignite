import { colors } from './colors'
import { fonts } from './fonts'
import { fontSizes } from './font-sizes'
import { fontWeights } from './font-weights'
import { lineHeights } from './line-heights'
import { radii } from './radii'
import { space } from './space'

export * from './colors'
export * from './font-weights'
export * from './font-sizes'
export * from './line-heights'
export * from './radii'
export * from './space'
export * from './fonts'

export const defaultTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} as const

export type DefaultTheme = typeof defaultTheme
