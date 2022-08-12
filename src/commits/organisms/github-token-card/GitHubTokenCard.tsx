import React, { useState } from 'react';
import InputCard from '../../../lib/molecules/input-card/InputCard';
import Button from '../../../lib/atoms/button/Button';
import { ButtonType } from '../../../lib/atoms/button/Button.types';

export interface IGitHubTokenCard {
  token: string | null | undefined;
  setToken: (token: string) => void;
}

const GitHubTokenCard = ({ token, setToken }: IGitHubTokenCard) => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setToken(inputValue);
  };

  const onInputChange = (value: string): void => {
    setInputValue(value);
  };

  return (
    <div>
      {token ? (
        <div>
          <div>GitHub Access Token found. You can check commits history now.</div>
        </div>
      ) : (
        <div>
          <div>Please enter GitHub Access Token to start</div>
          <InputCard label="Token" value={inputValue} onChange={onInputChange} />
          <Button type={ButtonType.Filled} onClick={handleButtonClick}>
            Use this token
          </Button>
        </div>
      )}
    </div>
  );
};

export default GitHubTokenCard;
