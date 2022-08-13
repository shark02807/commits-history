import React, { createContext, useContext, useReducer } from 'react';
import { ActionBase } from '../helper/reducer';
import { Commit } from '../model/commit';
import { IGitHubAPIService } from '../service/github';
import { Repository } from './Repository';

interface Error {
  response: {
    data: {
      message: string;
    };
  };
}

export interface IGitHubContext {
  /**
   * The list of commits.
   */
  commits?: Commit[] | null;
  /**
   * Whether the commits are loading.
   */
  isLoading?: boolean;
  /**
   * Error during loading.
   */
  error?: string | null;
  /**
   * call to load commits.
   */
  // eslint-disable-next-line
  loadCommits: (repository: Repository | null) => void;
}

type GitHubActionType = 'load_commits' | 'load_commits_success' | 'load_commits_failure';

type Action<
  TAction extends GitHubActionType,
  TPayload extends Partial<IGitHubContext> | void = void
> = ActionBase<TAction, TPayload>;

type GitHubAction =
  | Action<'load_commits'>
  | Action<'load_commits_success', { commits: Commit[] }>
  | Action<'load_commits_failure', { error: string }>;

function reducer(state: IGitHubContext, action: GitHubAction): IGitHubContext {
  switch (action.type) {
    case 'load_commits':
      return { ...state, commits: null, error: null, isLoading: true };
    case 'load_commits_success':
      return { ...state, commits: action.payload.commits, error: null, isLoading: false };
    case 'load_commits_failure':
      return { ...state, commits: null, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const INITIAL_STATE: IGitHubContext = {
  commits: null,
  isLoading: undefined,
  error: null,
  loadCommits: () => {}
};

export const GitHubContext = createContext<IGitHubContext>(INITIAL_STATE);

export const useGitHubContext = () => {
  return useContext(GitHubContext);
};

interface IGitHubContextProvider {
  children: React.ReactNode;
  gitHubService: IGitHubAPIService;
}

export const GitHubContextProvider = ({ children, gitHubService }: IGitHubContextProvider) => {
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    loadCommits: async (repository: Repository) => {
      dispatch({ type: 'load_commits' });
      try {
        dispatch({
          type: 'load_commits_success',
          payload: { commits: await gitHubService.loadCommits(repository) }
        });
      } catch (e) {
        dispatch({
          type: 'load_commits_failure',
          payload: { error: (e as Error)?.response?.data?.message }
        });
      }
    }
  } as IGitHubContext);

  return <GitHubContext.Provider value={state}>{children}</GitHubContext.Provider>;
};
