import React from 'react';
import { BtnColor, BtnSizes } from '../utils/consts';
import { ColorType } from '../utils/types';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: ColorType;
  size?: 'sm' | 'md' | 'lg';
  onClick?: (arg: unknown) => void;
};

const Button = ({
  children = 'OK',
  color = 'primary',
  size = 'md',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${BtnColor[color]} ${BtnSizes[size]} rounded`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
