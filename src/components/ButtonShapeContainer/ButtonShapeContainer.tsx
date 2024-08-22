'use client';

import clsx from 'clsx';

import styles from './ButtonShapeContainer.module.scss';

type Props = {
  answer: string;
  answerIndex: number;
  letterPrefix: string;
  hasCorrectStyle: boolean;
  hasWrongStyle: boolean;
  handleClick: (index: number) => void;
};

export const ButtonShapeContainer: React.FC<Props> = ({
  answer,
  letterPrefix,
  answerIndex,
  hasCorrectStyle,
  hasWrongStyle,
  handleClick,
}) => {
  return (
    <div className={styles.container}>
      <span
        className={clsx(styles.line, styles.focusLine, {
          [styles.correctLine]: hasCorrectStyle,
          [styles.wrongLine]: hasWrongStyle,
        })}
      />

      <button
        className={clsx(styles.button, styles.shape, styles.border, {
          [styles.correct]: hasCorrectStyle,
          [styles.wrong]: hasWrongStyle,
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
        })}
      />
    </div>
  );
};
