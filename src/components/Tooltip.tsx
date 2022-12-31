import React, { useState } from 'react';
import { NoChildrenText } from '../utils/consts';

export type TooltipProps = {
  children?: React.ReactNode;
  content: string;
};

const Tooltip = ({
  children = NoChildrenText,
  content = NoChildrenText,
}: TooltipProps) => {
  const [show, setShow] = useState(false);
  const tooltipClass = `inline-block absolute top-7 p-1 bg-gray-300 border rounded transition z-40 ${
    show ? 'opacity-100' : 'opacity-0'
  }`;

  return (
    <div className="relative group">
      <div className={tooltipClass}>{content}</div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="italic">
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
