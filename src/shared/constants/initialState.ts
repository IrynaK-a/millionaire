import gameData from '@/public/api/game.json';
import { IState } from '../interfaces';

export const initialState: IState = {
  score: 0,
  questionInfo: gameData[0],
  isGameFinished: false,
};
