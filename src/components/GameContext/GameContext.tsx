'use client';

import React, { useReducer } from 'react';

import { initialState } from '@/shared/constants';
import { IState } from '@/shared/interfaces';
import { Action } from '@/shared/types';

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'startGame':
      return initialState;

    case 'finishGame':
      return {
        ...state,
        isGameFinished: true,
        score: action.payload ?? state.score,
      };

    case 'giveNextQuestion': {
      const { questionInfo, score } = action.payload;

      return {
        ...state,
        score,
        questionInfo,
      };
    }

    default:
      return state;
  }
};

export const StateContext = React.createContext<IState>(initialState);

export const DispatchContext = React.createContext<(action: Action) => void>(
  () => {},
);

type Props = {
  children: React.ReactNode;
};

export const GameProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
