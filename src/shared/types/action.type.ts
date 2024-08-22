import { IGameQuestion } from '@/shared/interfaces';

export type Action =
  | {
      type: 'giveNextQuestion';
      payload: {
        questionInfo: IGameQuestion;
        score: number;
      };
    }
  | { type: 'finishGame'; payload?: number }
  | { type: 'startGame' };
