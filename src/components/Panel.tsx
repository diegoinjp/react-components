import React from 'react';
import { PlaceholderText } from '../utils/consts';
import Button, { ButtonProps } from './Button';

export type PanelProps = {
  children?: React.ReactNode;
  p?: number;
  height?: number;
  title?: string;
  buttons?: ButtonProps[];
};

const Panel = ({
  children = PlaceholderText,
  p = 2,
  height,
  title,
  buttons = [],
}: PanelProps) => {
  const hasMargin = buttons.length > 0 && !title ? 'mt-5' : '';

  return (
    <div
      style={{ padding: `${p}rem` }}
      className="flex flex-col gap-4 bg-gray-100 rounded drop-shadow-sm relative">
      <div className="flex gap-2 absolute top-4 right-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            color={button.color}
            onClick={button.onClick}
            icon={button.icon}
            size="sm">
            {button.children}
          </Button>
        ))}
      </div>
      <div className="uppercase font-bold text-xl">{title}</div>
      <div style={{ maxHeight: `${height}rem` }} className={hasMargin}>
        {children}
      </div>
    </div>
  );
};

export default Panel;
