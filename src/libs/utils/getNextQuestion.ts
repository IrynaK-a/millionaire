import { IGameQuestion } from '@/shared/interfaces';

export const getNextQuestion = (
  questions: IGameQuestion[],
  currentQuestionId: number,
) => {
  return questions.find(el => el.id === currentQuestionId + 1);
};
