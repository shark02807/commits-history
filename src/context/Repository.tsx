import React, { createContext, useContext, useReducer } from 'react';
import { ActionBase } from '../helper/reducer';

export type Repository = {
  owner: string;
  repo: string;
};

export interface IRepositoryContext {
  repository: Repository | null;
  setRepository: (repository: Repository) => void;
}

type RepositoryActionType = 'set_repository';

type Action<
  TAction extends RepositoryActionType,
  TPayload extends Partial<IRepositoryContext> | void = void
> = ActionBase<TAction, TPayload>;

type RepositoryAction = Action<'set_repository', { repository: Repository }>;

function reducer(state: IRepositoryContext, action: RepositoryAction): IRepositoryContext {
  switch (action.type) {
    case 'set_repository':
      return { ...state, repository: action.payload.repository };
    default:
      return state;
  }
}

export const INITIAL_STATE: IRepositoryContext = {
  repository: null,
  setRepository: () => {}
};

export const RepositoryContext = createContext<IRepositoryContext>(INITIAL_STATE);

export const useRepositoryContext = () => {
  return useContext(RepositoryContext);
};

interface IRepositoryContextProvider {
  children: React.ReactNode;
}

export const RepositoryContextProvider = ({ children }: IRepositoryContextProvider) => {
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    setRepository: (repository: Repository) => {
      dispatch({
        type: 'set_repository',
        payload: { repository }
      });
    }
  } as IRepositoryContext);

  return <RepositoryContext.Provider value={state}>{children}</RepositoryContext.Provider>;
};
