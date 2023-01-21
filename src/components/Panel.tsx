import React from 'react';
import { PLACEHOLDERTEXT } from '../utils/consts';
import Button, { ButtonProps } from './Button';

export type PanelProps = {
  children?: React.ReactNode;
  p?: number;
  height?: number;
  title?: string;
  buttons?: ButtonProps[];
  tags?: React.ReactNode;
  center?: boolean;
};

const Panel = ({
  children = PLACEHOLDERTEXT,
  p = 2,
  height = 14,
  title,
  buttons = [],
  tags,
  center = false,
}: PanelProps) => {
  const hasTopMargin = buttons.length > 0 && !title ? 'mt-5' : '';
  const hasBottomMargin = tags ? 'mb-7' : '';

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
      <div
        style={{ minHeight: `${height}rem` }}
        className={`overflow-y-scroll ${hasTopMargin} ${hasBottomMargin} flex ${
          center && 'justify-center'
        }`}>
        {children}
      </div>
      <div className="absolute bottom-4 left-6">{tags}</div>
    </div>
  );
};

export default Panel;
