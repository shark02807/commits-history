/* eslint no-console: 0 */
import React, { useEffect } from 'react';
import { useGitHubContext } from '../../../context/GitHub';
import { useRepositoryContext } from '../../../context/Repository';

const CommitsList = () => {
  const { commits, isLoading, loadCommits } = useGitHubContext();
  const { repository } = useRepositoryContext();

  useEffect(() => {
    loadCommits(repository);
  }, [loadCommits, repository]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {commits?.map((commit) => (
        <div key={commit.sha}>{commit.message}</div>
      ))}
    </div>
  );
};

export default CommitsList;
