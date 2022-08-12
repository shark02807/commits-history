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

  return (
    <div>
      {repositoryValue?.owner ? (
        <div>
          <div>
            <div>Repository</div>
            <div>Owner: {repositoryValue.owner}</div>
            <div>Repo: {repositoryValue.repo}</div>
          </div>
          <Button type={ButtonType.Default} onClick={handleChangeButtonClick}>
            Change repo
          </Button>
        </div>
      ) : (
        <div>
          <div>Please enter GitHub repository data</div>
          <InputCard label="Owner" value={ownerValue} onChange={onOwnerInputChange} />
          <InputCard label="Repo" value={repoValue} onChange={onRepoInputChange} />
          <Button type={ButtonType.Filled} onClick={handleSaveButtonClick}>
            Use this repo
          </Button>
        </div>
      )}
    </div>
  );
};

export default GitHubRepoForm;
