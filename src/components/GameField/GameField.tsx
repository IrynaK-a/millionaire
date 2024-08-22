'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { IGameQuestion } from '@/shared/interfaces';
import { getLetterPrefix, checkCorrectAnswer, wait } from '@/libs/utils';
import { useDispatch } from '@/libs/hooks';
import gameData from '@/public/api/game.json';

import styles from './GameField.module.scss';

export const getNextQuestion = (
  questions: IGameQuestion[],
  currentQuestionId: number,
) => {
  return questions.find(el => el.id === currentQuestionId + 1);
};

type Props = {
  questionInfo: IGameQuestion;
};

export const GameField: React.FC<Props> = ({ questionInfo }) => {
  const {
    question,
    answers,
    correctAnswers,
    id: currentId,
    prize,
  } = questionInfo;

  const dispatch = useDispatch();

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null,
  );

  const handleClick = async (index: number) => {
    await wait(1500);

    const isCorrect = checkCorrectAnswer(correctAnswers, index);

    setSelectedAnswerIndex(index);

    const lastQuestionId = gameData[gameData.length - 1].id;
    const isLastQuestion = lastQuestionId === currentId;

    if (isCorrect && !isLastQuestion) {
      const nextQuestion = getNextQuestion(gameData, currentId);

      await wait(1000);

      dispatch({
        type: 'giveNextQuestion',
        payload: {
          questionInfo: nextQuestion ?? questionInfo,
          score: prize,
        },
      });
    } else if (isCorrect && isLastQuestion) {
      await wait(1500);

      dispatch({
        type: 'finishGame',
        payload: prize,
      });
    } else {
      await wait(1500);

      dispatch({
        type: 'finishGame',
      });
    }

    setSelectedAnswerIndex(null);
  };

  return (
    <div className={styles.container}>
      <section className={styles.question}>{question}</section>

      <section className={styles.answersSection}>
        <ul className={styles.list}>
          {answers.map((answer, i) => {
            const isCorrect = checkCorrectAnswer(correctAnswers, i);
            const isSelected = selectedAnswerIndex === i;
            const hasCorrectStyle = isSelected && isCorrect;
            const hasWrongStyle = isSelected && !isCorrect;

            return (
              <li
                key={`${answer}`}
                className={styles.item}
              >
                <button
                  type="button"
                  className={clsx(styles.button, {
                    [styles.correct]: hasCorrectStyle,
                    [styles.wrong]: hasWrongStyle,
                  })}
                  onClick={() => handleClick(i)}
                >
                  <span className={styles.letterPrefix}>
                    {getLetterPrefix(i)}
                  </span>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
