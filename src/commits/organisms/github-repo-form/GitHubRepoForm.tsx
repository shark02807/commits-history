import React, { useState } from 'react';
import InputCard from '../../../lib/molecules/input-card/InputCard';
import Button from '../../../lib/atoms/button/Button';
import { ButtonType } from '../../../lib/atoms/button/Button.types';
import { Repository } from '../../../context/Repository';

export interface IGitHubRepoForm {
  repository: Repository | null;
  setRepository: (repository: Repository) => void;
}

const GitHubRepoForm = ({ repository, setRepository }: IGitHubRepoForm) => {
  const [ownerValue, setOwnerValue] = useState('');
  const [repoValue, setRepoValue] = useState('');
  const [repositoryValue, setRepositoryValue] = useState(repository);

  const handleSaveButtonClick = () => {
    setRepositoryValue({ owner: ownerValue, repo: repoValue });
    setRepository({ owner: ownerValue, repo: repoValue });
    setOwnerValue('');
    setRepoValue('');
  };

  const handleChangeButtonClick = () => {
    setRepositoryValue(null);
  };

  const onOwnerInputChange = (value: string): void => {
    setOwnerValue(value);
  };

  const onRepoInputChange = (value: string): void => {
    setRepoValue(value);
  };

  const isButtonDisabled = !ownerValue.trim() || !repoValue.trim();

  return (
    <div className="mt-5 w-85 flex flex-col items-center">
      {repositoryValue?.owner ? (
        <div className="flex flex-col items-center w-full">
          <div className="text-lg font-normal">Repository credentials</div>
          <div className="mt-3 flex justify-between items-center">
            Owner: <span className="font-medium ml-2">{repositoryValue.owner}</span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            Repo: <span className="font-medium ml-2">{repositoryValue.repo}</span>
          </div>
          <Button
            type={ButtonType.Default}
            onClick={handleChangeButtonClick}
            className="mt-4 w-full"
          >
            Change repo
          </Button>
        </div>
      ) : (
        <div>
          <div className="text-lg font-normal">Please enter GitHub repository credentials</div>
          <InputCard
            label="Owner"
            value={ownerValue}
            onChange={onOwnerInputChange}
            className="mt-3 flex justify-between"
          />
          <InputCard
            label="Repo"
            value={repoValue}
            onChange={onRepoInputChange}
            className="mt-2 flex justify-between"
          />
          <Button
            type={ButtonType.Filled}
            onClick={handleSaveButtonClick}
            className="mt-4 w-full"
            disabled={isButtonDisabled}
          >
            Use this repo
          </Button>
        </div>
      )}
    </div>
  );
};

export default GitHubRepoForm;
