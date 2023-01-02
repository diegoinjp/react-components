export type ColorType = 'primary' | 'secondary' | 'paper' | 'yellow';
export type ColorBgType = 'red' | 'cyan' | 'violet' | 'orange' | 'yellow';

export interface ButtonType {
  children: string;
  color: ColorType;
  onClick: (arg: unknown) => void;
}

export interface MenuType {
  label: string;
  url?: string;
  childMenu?: MenuType[];
}

export type PostProps = {
  children?: React.ReactNode;
  href?: string;
  p?: number;
  title?: string;
  badge?: string;
  tags?: string[];
  imgUrl?: string;
};
// export type CardTypes = {
//   title:
//   content:
//   badge:
//   imgUrl:
// }
