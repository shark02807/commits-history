import React from 'react';

export interface IInput {
  className?: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, className, onChangeHandler }: IInput) => {
  return (
    <input
      className={`rounded h-7 w-30 ring-2 ring-gray-200 p-1 ${className}`}
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
