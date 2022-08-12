import React from 'react';
import Input from '../../atoms/input/Input';

export interface IInputCard {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const InputCard = ({ label, value, onChange, className }: IInputCard) => {
  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    onChange(target.value);
  };

  return (
    <div className={className} role="input-card">
      <div className="mb-1">{label}</div>
      <Input value={value} onChangeHandler={handleChange} />
    </div>
  );
};

InputCard.defaultProps = {
  className: ''
};

export default InputCard;
