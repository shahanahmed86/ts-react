import { JSX } from 'react';
import styled, { useTheme } from 'styled-components';
import { TTheme } from '../../infrastructure/theme';

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

type SizeVariants = keyof typeof sizeVariants;

const positionVariants = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
};

type PositionVariants = keyof typeof positionVariants;

const getVariant = (
  position: PositionVariants,
  size: SizeVariants,
  theme: TTheme
): string => {
  const property = positionVariants[position];
  const sizeIndex = sizeVariants[size];
  const value = theme.spaces[sizeIndex];
  return `${property}: ${value}`;
};

interface SpacerDivProps {
  variant: string;
}

const SpacerDiv = styled.div`
  ${({ variant }: SpacerDivProps) => variant};
`;

interface SpacerProps {
  position?: PositionVariants;
  size?: SizeVariants;
  children?: JSX.Element;
}

function Spacer({ position = 'top', size = 'small', children }: SpacerProps) {
  const theme = useTheme() as TTheme;
  const variant = getVariant(position, size, theme);
  if (children) return <SpacerDiv variant={variant}>{children}</SpacerDiv>;
  return <SpacerDiv variant={variant} />;
}

export default Spacer;
