import React from 'react';
import { BtnColor, BtnSizes } from '../utils/consts';
import { ColorType } from '../utils/types';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: ColorType;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: (arg: unknown) => void;
};

const Button = ({
  children = 'OK',
  color = 'primary',
  size = 'md',
  icon,
  onClick,
}: ButtonProps) => {
  const btnCont = (
    <div className="flex justify-center items-center gap-2">
      {icon}
      {children}
    </div>
  );

  return (
    <button
      className={`${BtnColor[color]} ${BtnSizes[size]} rounded`}
      onClick={onClick}>
      {btnCont}
    </button>
  );
};

export default Button;
