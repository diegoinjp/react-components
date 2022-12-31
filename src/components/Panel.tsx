import React from 'react';
import { PlaceholderText } from '../utils/consts';
import { ButtonType } from '../utils/types';
import Button from './Button';

export type PanelProps = {
  children?: React.ReactNode;
  p?: number;
  title?: string;
  buttons?: ButtonType[];
};

const Panel = ({
  children = PlaceholderText,
  p = 2,
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
            color={button.btnColor}
            onClick={button.onClick}
            size="sm">
            {button.label}
          </Button>
        ))}
      </div>
      <div className="uppercase font-bold text-xl">{title}</div>
      <div className={hasMargin}>{children}</div>
    </div>
  );
};

export default Panel;
