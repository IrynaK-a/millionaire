'use client';

import clsx from 'clsx';

import styles from './MenuShapeContainer.module.scss';

type Props = {
  prize: number;
  isActive: boolean;
  isPassive: boolean;
};

export const MenuShapeContainer: React.FC<Props> = ({
  prize,
  isActive,
  isPassive,
}) => {
  return (
    <div className={styles.container}>
      <span
        className={clsx(styles.line, {
          [styles.activeLine]: isActive,
          [styles.passiveLine]: isPassive,
        })}
      ></span>

      <div
        className={clsx(styles.shape, styles.border, {
          [styles.active]: isActive,
          [styles.passive]: isPassive,
        })}
      >
        <p>${prize.toLocaleString()}</p>
      </div>

      <span
        className={clsx(styles.line, {
          [styles.activeLine]: isActive,
          [styles.passiveLine]: isPassive,
        })}
      ></span>
    </div>
  );
};
