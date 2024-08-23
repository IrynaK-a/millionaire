import { IGameQuestion } from '@/shared/interfaces';

export const getNextQuestion = (
  questions: IGameQuestion[],
  currentQuestionId: number,
) => questions.find(el => el.id === currentQuestionId + 1);
