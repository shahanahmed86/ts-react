import styled from 'styled-components';
import { TTheme } from '../infrastructure/theme';

const defaultTextStyles = (theme: TTheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: TTheme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme: TTheme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme: TTheme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme: TTheme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: TTheme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = { body, label, caption, error, hint };

type TextProps = { variant?: keyof typeof variants; theme: TTheme };

const Typography = styled.p`
  ${({ theme }: { theme: TTheme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }: TextProps) => variants[variant](theme)}
`;

export default Typography;
