/* eslint no-console: 0 */
import React, { useEffect } from 'react';
import { useGitHubContext } from '../context/GitHub';
import { useAccessTokenContext } from '../context/AccessToken';
import GitHubTokenCard from './organisms/github-token-card/GitHubTokenCard';

const CommitApp = () => {
  const { commits, isLoading, loadCommits } = useGitHubContext();
  const { token, getToken, setToken } = useAccessTokenContext();

  useEffect(() => {
    loadCommits();
  }, [loadCommits]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col w-full pb-28">
      <div>COMMITS APP</div>
      <GitHubTokenCard token={token} setToken={setToken} />
      <div>
        {commits?.map((commit) => (
          <div>{commit.message}</div>
        ))}
      </div>
    </div>
  );
};

export default CommitApp;
