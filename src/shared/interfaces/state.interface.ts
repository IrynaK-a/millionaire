import { IGameQuestion } from './gameQuestion';

export interface IState {
  gameData: IGameQuestion[];
  score: number;
  isGameFinished: boolean;
  questionInfo: IGameQuestion;
  selectedAnswers: number[];
  isAllAnswersSelected: boolean;
}
