import { IGameQuestion } from '@/shared/interfaces';

export interface IState {
  score: number;
  isGameFinished: boolean;
  questionInfo: IGameQuestion;
}
