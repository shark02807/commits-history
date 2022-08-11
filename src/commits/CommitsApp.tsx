import React, { useEffect } from 'react';
import { useGitHubContext } from '../context/GitHub';

const CommitApp = () => {
  const { commits, isLoading, loadCommits } = useGitHubContext();

  useEffect(() => {
    loadCommits();
  }, [loadCommits]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col w-full pb-28" role="track-details">
      COMMITS APP
      <div>
        {commits?.map((commit) => (
          <div>{commit.message}</div>
        ))}
      </div>
    </div>
  );
};

export default CommitApp;
