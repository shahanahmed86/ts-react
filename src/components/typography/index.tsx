import styled, { css } from 'styled-components';
import { TTheme } from '../../app/theme/default';

const defaultTextStyles = (theme: TTheme) => css`
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: TTheme) => css`
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme: TTheme) => css`
  font-size: ${theme.fontSizes.body};
`;

const error = (theme: TTheme) => css`
  color: ${theme.colors.text.error};
`;

const caption = (theme: TTheme) => css`
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: TTheme) => css`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = { body, label, caption, error, hint };
type Variant = keyof typeof variants;

type TextProps = { variant?: Variant; theme: TTheme };

const Typography = styled.p`
  ${({ theme }: TextProps) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }: TextProps) => variants[variant](theme)}
`;

export default Typography;
