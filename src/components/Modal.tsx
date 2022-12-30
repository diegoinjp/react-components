import React from 'react';
import { NoChildrenText } from '../utils/consts';
import { ButtonType } from '../utils/types';
import Button from './Button';

export type ModalProps = {
  children?: React.ReactNode;
  open: boolean;
  setOpen: (arg: boolean) => void;
  title?: string;
  buttons?: ButtonType[];
};

const Modal = ({
  children = NoChildrenText,
  open = false,
  setOpen,
  title,
  buttons = [],
}: ModalProps) => {
  const handleClose = () => setOpen(false);

  return (
    <>
      {open && (
        <div
          className="w-full h-full bg-black/25 z-30 fixed flex justify-center items-center"
          onClick={handleClose}>
          <div
            className="p-8 bg-white drop-shadow-xl flex gap-3 flex-col w-11/12 md:w-[44rem]"
            onClick={e => e.stopPropagation()}>
            {title && (
              <div className="border-b text-xl font-bold uppercase">
                {title}
              </div>
            )}
            <div className="max-h-80 overflow-y-scroll">{children}</div>
            <div className="self-end flex gap-2">
              {buttons.map((button, index) => (
                <Button
                  color={button.btnColor}
                  key={index}
                  onClick={button.onClick}
                  size="sm">
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
