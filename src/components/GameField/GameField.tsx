'use client';
import { useState } from 'react';

import { IGameQuestion } from '@/shared/interfaces';

import styles from './GameField.module.scss';
import { getLetterPrefix } from '../../libs/utils/getLetterPrefix';

type Props = {
  questionInfo: IGameQuestion;
};

export const GameField: React.FC<Props> = ({ questionInfo }) => {
  const { question, answers, correctAnswers, id } = questionInfo;

  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);

  const handleClick = (index: number) => {
    if (correctAnswers.includes(index)) {
      setIsCorrectAnswer(true);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.question}>{question}</section>

      <section className={styles.answersSection}>
        <ul className={styles.list}>
          {answers.map((answer, i) => (
            <li
              key={`${answer}`}
              className={styles.item}
            >
              <button
                type="button"
                className={styles.button}
                onClick={() => handleClick(i)}
              >
                <span className={styles.letterPrefix}>
                  {getLetterPrefix(i)}
                </span>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
