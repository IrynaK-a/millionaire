import {
  DispatchContext,
  StateContext,
} from '@/components/GameContext/GameContext';
import { useContext } from 'react';

export const useDispatch = () => useContext(DispatchContext);
export const useGameState = () => useContext(StateContext);
