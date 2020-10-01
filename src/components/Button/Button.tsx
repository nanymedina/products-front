import React, { ReactNode, ReactElement } from 'react';

import Style from './Button.module.scss';

interface ButtonT {
  onClick: () => void;
  text: string;
  children?: ReactNode;
}

const Button = ({ onClick, text, children, ...props }: ButtonT): ReactElement => {
  return (
    <button className={Style.button} onClick={onClick} {...props} type="button">
      <strong>{text}</strong>
      {children}
    </button>
  );
};

export default Button;
