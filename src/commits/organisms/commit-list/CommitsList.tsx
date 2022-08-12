/* eslint no-console: 0 */
import React, { useEffect } from 'react';
import { useGitHubContext } from '../../../context/GitHub';
import { useRepositoryContext } from '../../../context/Repository';
import CommitCard from '../commit-card/CommitCard';
import { useCurrentTimeContext } from '../../../context/CurrentTime';
import Button from '../../../lib/atoms/button/Button';
import { ButtonType } from '../../../lib/atoms/button/Button.types';

const CommitsList = () => {
  const { commits, isLoading, loadCommits } = useGitHubContext();
  const { repository } = useRepositoryContext();
  const { setCurrentTime } = useCurrentTimeContext();

  let intervalId: any;
  if (commits && commits.length) {
    intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
  } else {
    clearInterval(intervalId);
  }

  useEffect(() => {
    loadCommits(repository);
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [loadCommits, repository]);

  const refreshCommits = () => {
    loadCommits(repository);
  };

  return (
    <div className="mt-7 w-full max-w-lg border-t-2 pt-4 border-slate-400">
      {isLoading ? (
        <div className="text-xl font-semibold flex justify-center">loading...</div>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="text-xl font-semibold">Commits list</div>
            <div>
              <Button
                type={ButtonType.Filled}
                onClick={refreshCommits}
                className="w-24"
                disabled={isLoading}
              >
                Refresh
              </Button>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3">
            {commits?.map((commit) => (
              <CommitCard key={commit.sha} commit={commit} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CommitsList;
