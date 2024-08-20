import { GameType } from '@/shared/enums';

export interface INewGame {
  type?: typeof GameType.START;
  score?: undefined;
}
