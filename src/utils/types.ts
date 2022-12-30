export type ColorType = 'primary' | 'secondary' | 'paper' | 'yellow';

export interface ButtonType {
  label: string;
  btnColor: ColorType;
  onClick: (arg: unknown) => void;
}

// export type CardTypes = {
//   title:
//   content:
//   badge:
//   imgUrl:
// }
