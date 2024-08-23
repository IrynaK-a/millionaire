'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { useDispatch, useGameState } from '@/libs/hooks';
import {
  getLetterPrefix,
  wait,
  checkAnswers,
  checkCorrectAnswer,
} from '@/libs/utils';

import styles from './ButtonShapeContainer.module.scss';

type Props = {
  answer: string;
  answerIndex: number;
};

export const ButtonShapeContainer: React.FC<Props> = ({
  answer,
  answerIndex,
}) => {
  const dispatch = useDispatch();

  const { selectedAnswers, questionInfo, isAllAnswersSelected } =
    useGameState();

  const { correctAnswers } = questionInfo;

  const [hasCorrectStyle, setHasCorrectStyle] = useState(false);
  const [hasWrongStyle, setHasWrongStyle] = useState(false);

  const isSelected = selectedAnswers.includes(answerIndex);
  const letterPrefix = getLetterPrefix(answerIndex);

  const handleClick = (index: number) => {
    if (isSelected) {
      return;
    }

    if (selectedAnswers.length < correctAnswers.length) {
      dispatch({
        type: 'selectAnswer',
        payload: index,
      });
    }
  };

  useEffect(() => {
    (async () => {
      if (!isAllAnswersSelected) {
        return;
      }

      const isAllAnswersCorrected = checkAnswers(
        correctAnswers,
        selectedAnswers,
      );

      if (!isSelected) {
        return;
      }

      await wait(1000);

      if (isAllAnswersCorrected) {
        setHasCorrectStyle(true);
      } else {
        if (checkCorrectAnswer(correctAnswers, answerIndex)) {
          return;
        }

        setHasWrongStyle(true);
      }
    })();
  }, [
    isAllAnswersSelected,
    answerIndex,
    correctAnswers,
    isSelected,
    selectedAnswers,
  ]);

  return (
    <div className={styles.container}>
      <span
        className={clsx(styles.line, styles.focusLine, {
          [styles.correctLine]: hasCorrectStyle,
          [styles.wrongLine]: hasWrongStyle,
          [styles.selected]: isSelected,
        })}
      />

      <button
        type="button"
        className={clsx(styles.button, styles.shape, styles.border, {
          [styles.correct]: hasCorrectStyle,
          [styles.wrong]: hasWrongStyle,
          [styles.selected]: isSelected,
        })}
        onClick={() => handleClick(answerIndex)}
      >
        <span className={styles.letterPrefix}>{letterPrefix}</span>
        {answer}
      </button>

      <span
        className={clsx(styles.line, styles.focusLine, {
          [styles.correctLine]: hasCorrectStyle,
          [styles.wrongLine]: hasWrongStyle,
          [styles.selected]: isSelected,
        })}
      />
    </div>
  );
};
