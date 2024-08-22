'use client';

import Link from 'next/link';

import { SideMenu, GameField, Greeting } from '@/components';
import { useGameState } from '@/libs/hooks';

import styles from './Game.module.scss';

export const Game = () => {
  const { questionInfo, isGameFinished, score } = useGameState();

  if (isGameFinished) {
    return (
      <Greeting
        type="finished"
        score={score}
      />
    );
  }

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Link
          href="#menu"
          className={styles.link}
        />
      </nav>

      <GameField questionInfo={questionInfo} />

      <SideMenu />
    </div>
  );
};
