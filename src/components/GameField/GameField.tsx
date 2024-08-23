'use client';

import { useEffect } from 'react';

import { wait, getNextQuestion, checkAnswers } from '@/libs/utils';
import { useDispatch, useGameState } from '@/libs/hooks';
import { ButtonShapeContainer } from '@/components';

import styles from './GameField.module.scss';

export const GameField = () => {
  const dispatch = useDispatch();
  const { selectedAnswers, questionInfo, isAllAnswersSelected, gameData } =
    useGameState();

  const {
    question,
    answers,
    correctAnswers,
    id: currentQuestionId,
    prize,
  } = questionInfo;

  useEffect(() => {
    (async () => {
      if (!isAllAnswersSelected) {
        return;
      }

      const isCorrect = checkAnswers(correctAnswers, selectedAnswers);
      const lastQuestionId = gameData[gameData.length - 1].id;
      const isLastQuestion = lastQuestionId === currentQuestionId;

      if (isCorrect && !isLastQuestion) {
        const nextQuestion = getNextQuestion(gameData, currentQuestionId);

        await wait(2000);

        dispatch({
          type: 'giveNextQuestion',
          payload: {
            questionInfo: nextQuestion ?? questionInfo,
            score: prize,
          },
        });
      } else if (isCorrect && isLastQuestion) {
        await wait(2000);

        dispatch({
          type: 'finishGame',
          payload: prize,
        });
      } else {
        await wait(2000);

        dispatch({
          type: 'finishGame',
        });
      }
    })();
  }, [
    isAllAnswersSelected,
    correctAnswers,
    currentQuestionId,
    dispatch,
    gameData,
    prize,
    questionInfo,
    selectedAnswers,
  ]);

  return (
    <div className={styles.container}>
      <section className={styles.question}>{question}</section>

      <section className={styles.answersSection}>
        <ul className={styles.list}>
          {answers.map((answer, i) => (
            <li
              key={`${i}-${currentQuestionId}`}
              className={styles.item}
            >
              <ButtonShapeContainer
                answer={answer}
                answerIndex={i}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
