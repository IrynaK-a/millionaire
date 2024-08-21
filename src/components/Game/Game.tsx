'use client';

import { useState } from 'react';
import Link from 'next/link';

import { IGameQuestion } from '@/shared/interfaces';
import { SideMenu, GameField } from '@/components';
import gameData from '@/public/api/game.json';

import styles from './Game.module.scss';

type Score = Pick<IGameQuestion, 'prize'> | 0;

export const Game = () => {
  const [currentQuestionInfo, setCurrentQuestionInfo] = useState<IGameQuestion>(
    gameData[1],
  );
  const [score, setScore] = useState<Score>(0);

  console.log(currentQuestionInfo);

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Link
          href="#menu"
          className={styles.link}
        />
      </nav>

      <GameField questionInfo={currentQuestionInfo} />

      <SideMenu activePrize={currentQuestionInfo.prize} />
    </div>
  );
};
