import COLORS from './colors.theme';
import { FONT_FACES, FONT_SIZES, FONT_WEIGHTS } from './fonts.theme';
import { LINE_HEIGHTS, SIZES, SPACES } from './sizes.theme';

export const THEME = {
  colors: COLORS,
  spaces: SPACES,
  lineHeights: LINE_HEIGHTS,
  sizes: SIZES,
  fonts: FONT_FACES,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
};

export type TTheme = typeof THEME;
