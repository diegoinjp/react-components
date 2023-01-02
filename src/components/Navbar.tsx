import React from 'react';
import { BgColor, BgHoverColor } from '../utils/consts';
import { ColorType, MenuType } from '../utils/types';

export type NavbarProps = {
  title?: string;
  p?: number;
  color?: ColorType;
  menuLinks?: MenuType[];
};

const Navbar = ({
  title = 'Title',
  p = 16,
  color = 'secondary',
  menuLinks = [],
}: NavbarProps) => {
  return (
    <div className={`flex justify-between items-center ${BgColor[color]}`}>
      <div className="font-semibold ml-4">{title}</div>
      <div className="flex">
        {menuLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            style={{ padding: `${p}px 16px` }}
            className={`group ${BgHoverColor[color]}`}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
