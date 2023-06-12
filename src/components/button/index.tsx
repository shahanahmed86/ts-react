import { Button, ButtonProps } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { TTheme } from '../../app/theme/default';

const defaultTextStyles = (theme: TTheme) => css`
  background-color: ${theme.colors.ui.primary.main};
  color: ${theme.colors.text.primary};
  font-family: ${theme.fonts.body};
  border-width: 0px;
  outline-width: 10px;
  position: relative;
  overflow: hidden;
`;

type TextProps = { theme: TTheme };

const DefaultStyledButton = styled(Button)`
  ${({ theme }: TextProps) => defaultTextStyles(theme)}
`;

function StyledButton(props: ButtonProps) {
  return <DefaultStyledButton {...props}>Click Me</DefaultStyledButton>;
}

export default StyledButton;
