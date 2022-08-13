import React, { createContext, useContext, useReducer } from 'react';
import { ActionBase } from '../helper/reducer';
import { ISessionStorageService } from '../service/session-storage';

const GITHUB_ACCESS_TOKEN_KEY = 'github_access_token';

export interface IAccessTokenContext {
  token: string | null;
  getToken: () => string;
  setToken: (token: string) => void;
}

type AccessTokenActionType = 'get_token' | 'get_token_success' | 'get_token_failure' | 'set_token';

type Action<
  TAction extends AccessTokenActionType,
  TPayload extends Partial<IAccessTokenContext> | void = void
> = ActionBase<TAction, TPayload>;

type AccessTokenAction =
  | Action<'get_token'>
  | Action<'get_token_success', { token: string }>
  | Action<'get_token_failure'>
  | Action<'set_token', { token: string }>;

function reducer(state: IAccessTokenContext, action: AccessTokenAction): IAccessTokenContext {
  switch (action.type) {
    case 'get_token_success':
      return { ...state, token: action.payload.token };
    case 'get_token_failure':
      return { ...state, token: '' };
    case 'set_token':
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
}

export const INITIAL_STATE: IAccessTokenContext = {
  token: null,
  getToken: () => '',
  setToken: () => {}
};

export const AccessTokenContext = createContext<IAccessTokenContext>(INITIAL_STATE);

export const useAccessTokenContext = () => {
  return useContext(AccessTokenContext);
};

interface IAccessTokenContextProvider {
  children: React.ReactNode;
  sessionStorageService: ISessionStorageService;
}

export const AccessTokenContextProvider = ({
  children,
  sessionStorageService
}: IAccessTokenContextProvider) => {
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    getToken: () => {
      dispatch({ type: 'get_token' });
      try {
        dispatch({
          type: 'get_token_success',
          payload: { token: sessionStorageService.getItem(GITHUB_ACCESS_TOKEN_KEY) }
        });
      } catch {
        dispatch({
          type: 'get_token_failure'
        });
      }
    },
    setToken: (token) => {
      sessionStorageService.setItem(GITHUB_ACCESS_TOKEN_KEY, token);
      dispatch({
        type: 'set_token',
        payload: { token }
      });
    }
  } as IAccessTokenContext);

  return <AccessTokenContext.Provider value={state}>{children}</AccessTokenContext.Provider>;
};
