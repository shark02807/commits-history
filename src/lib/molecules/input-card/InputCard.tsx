import React, { useState } from 'react';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import { ButtonType } from '../../atoms/button/Button.types';

export interface IInputCard {
  label: string;
  buttonText?: string;
  onClickHandler?: (value: string) => void;
}

const InputCard = ({ label, buttonText, onClickHandler }: IInputCard) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  const handleButtonClick = () => {
    onClickHandler?.(inputValue);
  };

  return (
    <div role="input-card">
      <div>{label}</div>
      <Input value={inputValue} onChangeHandler={handleChange} />
      {buttonText ? (
        <Button type={ButtonType.Filled} onClick={handleButtonClick}>
          {buttonText}
        </Button>
      ) : null}
    </div>
  );
};

InputCard.defaultProps = {
  buttonText: null,
  onClickHandler: () => {}
};

export default InputCard;
