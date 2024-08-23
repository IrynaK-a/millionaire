import gameData from '@/public/api/game.json';
import { IState } from '../interfaces/state.interface';

export const initialState: IState = {
  gameData,
  score: 0,
  questionInfo: gameData[0],
  isGameFinished: false,
  selectedAnswers: [],
  isAllAnswersSelected: false,
};
