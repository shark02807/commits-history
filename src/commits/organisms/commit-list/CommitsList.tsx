/* eslint no-console: 0 */
import React, { useEffect, useState } from 'react';
import { useGitHubContext } from '../../../context/GitHub';
import { useRepositoryContext } from '../../../context/Repository';
import CommitCard from '../commit-card/CommitCard';
import Button from '../../../lib/atoms/button/Button';
import { ButtonType } from '../../../lib/atoms/button/Button.types';
import { useAccessTokenContext } from '../../../context/AccessToken';
import useCountDownTimer from './hooks/useCountDownTimer';
import useCurrentDateInterval from './hooks/useCurrentDateInterval';

const COUNT_DOWN_SECONDS = 30;

const CommitsList = () => {
  const { commits, error, isLoading, loadCommits } = useGitHubContext();
  const { repository } = useRepositoryContext();
  const { token } = useAccessTokenContext();

  const isListReady = !!(repository && token && !isLoading && !error && commits);
  const currentTime = useCurrentDateInterval(isListReady);

  const [countDown, setCountDown] = useState(COUNT_DOWN_SECONDS);
  const setCountDownState = (value: number) => setCountDown(value);
  useCountDownTimer(isListReady, COUNT_DOWN_SECONDS, countDown, setCountDownState);

  useEffect(() => {
    if (!countDown) {
      loadCommits(repository);
    }
  }, [countDown]);

  useEffect(() => {
    if (repository) {
      loadCommits(repository);
    }
  }, [loadCommits, repository]);

  const refreshCommits = () => {
    loadCommits(repository);
    setCountDown(COUNT_DOWN_SECONDS);
  };

  return (
    <div className="mt-7 w-full max-w-lg border-t-2 pt-4 border-slate-400">
      {isLoading ? (
        <div className="text-xl font-semibold flex justify-center">loading...</div>
      ) : null}
      {error ? (
        <div className="text-xl font-semibold flex justify-center">
          Repository was not found. Please check credentials.
        </div>
      ) : null}
      {isListReady ? (
        <>
          <div className="flex justify-between">
            <div className="text-xl font-semibold">Commits list</div>
            <div className="flex flex-col items-end">
              <Button
                type={ButtonType.Filled}
                onClick={refreshCommits}
                className="w-24"
                disabled={isLoading}
              >
                Refresh
              </Button>
              <div className="text-base mt-1 text-slate-600 text-sm">
                {countDown} seconds until next refresh
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3">
            {commits?.map((commit) => (
              <CommitCard key={commit.sha} commit={commit} currentTime={currentTime} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CommitsList;
