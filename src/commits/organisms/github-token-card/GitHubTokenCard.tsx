import React, { useState } from 'react';
import InputCard from '../../../lib/molecules/input-card/InputCard';
import Button from '../../../lib/atoms/button/Button';
import Icon from '../../../lib/atoms/icon/Icon';
import { ButtonType } from '../../../lib/atoms/button/Button.types';
import CheckIconPNG from './assets/check.png';

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

  const isButtonDisabled = !inputValue.trim();

  return (
    <div className="mt-5 w-85 border-b-2 pb-4 border-slate-400">
      {token ? (
        <div className="text-lg font-normal flex flex-col items-center">
          <div className="flex items-center">
            <Icon src={CheckIconPNG} alt="" className="w-5 h-5 mr-1" />
            GitHub Access Token is set
          </div>
          <div>You can check commits history now</div>
        </div>
      ) : (
        <div>
          <div className="mt-2 text-lg font-normal">Please enter GitHub Access Token to start</div>
          <InputCard
            label="Token"
            value={inputValue}
            onChange={onInputChange}
            className="mt-3 flex justify-between"
          />
          <Button
            type={ButtonType.Filled}
            onClick={handleButtonClick}
            className="mt-4 w-full"
            disabled={isButtonDisabled}
          >
            Use this token
          </Button>
        </div>
      )}
    </div>
  );
};

export default GitHubTokenCard;
