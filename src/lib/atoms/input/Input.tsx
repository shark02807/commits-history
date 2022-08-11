import React from 'react';

export interface IInput {
  className?: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, className, onChangeHandler }: IInput) => {
  return (
    <input
      className={`rounded-full h-7 w-30 ring-2 ring-white ${className}`}
      role="input"
      value={value}
      onChange={onChangeHandler}
    />
  );
};

Input.defaultProps = {
  className: ''
};

export default Input;
