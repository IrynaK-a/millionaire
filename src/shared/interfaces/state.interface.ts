import { IGameQuestion } from '@/shared/interfaces';

export interface IState {
  gameData: IGameQuestion[];
  score: number;
  isGameFinished: boolean;
  questionInfo: IGameQuestion;
  selectedAnswers: number[];
  isAllAnswersSelected: boolean;
}
