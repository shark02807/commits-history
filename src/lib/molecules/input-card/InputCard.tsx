import React from 'react';
import Input from '../../atoms/input/Input';

export interface IInputCard {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputCard = ({ label, value, onChange }: IInputCard) => {
  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    onChange(target.value);
  };

  return (
    <div role="input-card">
      <div>{label}</div>
      <Input value={value} onChangeHandler={handleChange} />
    </div>
  );
};

export default InputCard;
