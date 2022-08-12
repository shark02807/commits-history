/* eslint no-console: 0 */
import React, { useEffect } from 'react';
import { GitHubContextProvider } from '../context/GitHub';
import GitHubAPIService, { IGitHubAPIService } from '../service/github';
import { useAccessTokenContext } from '../context/AccessToken';
import { useRepositoryContext } from '../context/Repository';
import GitHubTokenCard from './organisms/github-token-card/GitHubTokenCard';
import GitHubRepoForm from './organisms/github-repo-form/GitHubRepoForm';
import CommitsList from './organisms/commit-list/CommitsList';

interface IProviders {
  children: React.ReactNode;
  gitHubService: IGitHubAPIService;
}

const Providers = ({ gitHubService, children }: IProviders) => {
  return <GitHubContextProvider gitHubService={gitHubService}>{children}</GitHubContextProvider>;
};

const CommitApp = () => {
  const { token, getToken, setToken } = useAccessTokenContext();
  const { repository, setRepository } = useRepositoryContext();

  useEffect(() => {
    getToken();
  }, [getToken]);

  const gitHubService = new GitHubAPIService(token);

  return (
    <Providers gitHubService={gitHubService}>
      <div className="flex flex-col w-full pb-28 items-center pt-5">
        <div className="text-2xl font-semibold">COMMITS APP</div>
        <GitHubTokenCard token={token} setToken={setToken} />
        <GitHubRepoForm repository={repository} setRepository={setRepository} />
        <CommitsList />
      </div>
    </Providers>
  );
};

export default CommitApp;
