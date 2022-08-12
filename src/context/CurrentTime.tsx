import React, { createContext, useContext, useReducer } from 'react';
import { ActionBase } from '../helper/reducer';

export interface ICurrentTimeContext {
  currentTime: Date;
  setCurrentTime: (currentTime: Date) => void;
}

type CurrentTimeActionType = 'set_current_time';

type Action<
  TAction extends CurrentTimeActionType,
  TPayload extends Partial<ICurrentTimeContext> | void = void
> = ActionBase<TAction, TPayload>;

type CurrentTimeAction = Action<'set_current_time', { currentTime: Date }>;

function reducer(state: ICurrentTimeContext, action: CurrentTimeAction): ICurrentTimeContext {
  switch (action.type) {
    case 'set_current_time':
      return { ...state, currentTime: action.payload.currentTime };
    default:
      return state;
  }
}

export const INITIAL_STATE: ICurrentTimeContext = {
  currentTime: new Date(),
  setCurrentTime: () => {}
};

export const CurrentTimeContext = createContext<ICurrentTimeContext>(INITIAL_STATE);

export const useCurrentTimeContext = () => {
  return useContext(CurrentTimeContext);
};

interface ICurrentTimeContextProvider {
  children: React.ReactNode;
}

export const CurrentTimeContextProvider = ({ children }: ICurrentTimeContextProvider) => {
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
    setCurrentTime: (currentTime: Date) => {
      dispatch({
        type: 'set_current_time',
        payload: { currentTime }
      });
    }
  } as ICurrentTimeContext);

  return <CurrentTimeContext.Provider value={state}>{children}</CurrentTimeContext.Provider>;
};
