export const checkCorrectAnswer = (array: number[], index: number) =>
  array.includes(index);

export const checkAnswers = (
  selectedAnswers: number[],
  correctAnswers: number[],
) => selectedAnswers.every(answer => correctAnswers.includes(answer));
;
