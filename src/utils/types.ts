export type ColorType = 'primary' | 'secondary' | 'paper' | 'yellow';

export interface ButtonType {
  label: string;
  btnColor: ColorType;
  onClick: (arg: unknown) => void;
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
