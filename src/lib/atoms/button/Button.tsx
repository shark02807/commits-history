import React from 'react';
import cn from 'classnames';
import { ButtonType } from './Button.types';

export interface IButton {
  type?: ButtonType;
  children: React.ReactNode;
  className?: string;
  /**
   * The callback to be called when the button is clicked.
   */
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ type, children, className, onClick, disabled }: IButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('px-3 py-2 font-semibold rounded-lg h-10 whitespace-nowrap', className, {
        ['bg-white ring-1 ring-gray-200 text-black hover:bg-slate-50']: type === ButtonType.Default,
        ['bg-indigo-900 text-white hover:bg-indigo-700']: type === ButtonType.Filled,
        ['bg-transparent text-indigo-900']: type === ButtonType.Text,
        ['bg-zinc-500 hover:bg-zinc-500']: disabled
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.Default,
  className: null,
  onClick: null,
  disabled: false
};

export default Button;
