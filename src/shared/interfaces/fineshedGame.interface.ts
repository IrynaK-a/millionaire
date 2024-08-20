import { GameType } from '@/shared/enums';

export interface IFineshedGame {
  type: typeof GameType.FINISHED;
  score: number;
}
