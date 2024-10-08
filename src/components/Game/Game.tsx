'use client';

import { useState } from 'react';

import { SideMenu, GameField, Greeting } from '@/components';
import { useGameState } from '@/libs/hooks';

import styles from './Game.module.scss';

export const Game = () => {
  const { isGameFinished, score } = useGameState();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className={styles.nav}>
        <button
          type="button"
          aria-label="open side menu"
          className={styles.navButton}
          onClick={() => setIsMenuOpen(true)}
        />
      </nav>

      <GameField />

      <SideMenu
        closeMenu={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};
