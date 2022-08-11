import { renderHook } from '@testing-library/react';
import React from 'react';
import { useGitHubContext, IGitHubContext, GitHubContext, INITIAL_STATE } from './GitHub';
import { commits } from '../mocks/test-mocks';
import { createCommit } from '../model/commit';

jest.mock('../service/github');

function createWrapper(value: Partial<IGitHubContext>) {
  const contextValue = {
    ...INITIAL_STATE,
    ...value
  };
  return function Providers({ children }: { children: React.ReactNode }) {
    return <GitHubContext.Provider value={contextValue}>{children}</GitHubContext.Provider>;
  };
}

describe('GitHub Context', () => {
  describe('useGitHubContext', () => {
    it('should return the list of commits', () => {
      const commitsResult = commits.map((commit) => createCommit(commit));
      const { result } = renderHook(() => useGitHubContext(), {
        wrapper: createWrapper({ commits: commitsResult })
      });

      expect(result.current.commits).toBe(commitsResult);
    });
  });
});
