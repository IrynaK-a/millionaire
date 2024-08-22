import Link from 'next/link';

import { IGameQuestion } from '@/shared/interfaces';
import { useGameState } from '@/libs/hooks';
import { MenuShapeContainer } from '@/components';
import gameData from '@/public/api/game.json';

import styles from './SideMenu.module.scss';

export const SideMenu = () => {
  const reversedData: IGameQuestion[] = [...gameData].reverse();

  const { questionInfo } = useGameState();
  const { prize: activePrize } = questionInfo;

  return (
    <div
      className={styles.container}
      id="menu"
    >
      <nav className={styles.menu}>
        <Link
          href="#"
          className={styles.link}
        />
      </nav>

      <ul className={styles.list}>
        {reversedData.map(({ id, prize }) => {
          const isActive = activePrize === prize;
          const isPassive = prize < activePrize;

          return (
            <li
              className={styles.item}
              key={id}
            >
              <MenuShapeContainer
                prize={prize}
                isActive={isActive}
                isPassive={isPassive}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
