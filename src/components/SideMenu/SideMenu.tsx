import clsx from 'clsx';

import gameData from '@/public/api/game.json';

import styles from './SideMenu.module.scss';
import Link from 'next/link';
import { IGameQuestion } from '@/shared/interfaces';

type Props = {
  activePrize: number;
};

export const SideMenu: React.FC<Props> = ({ activePrize }) => {
  const reversedData: IGameQuestion[] = [...gameData].reverse();
  const isVisible = true;

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
              className={clsx(
                styles.item,
                { [styles.active]: isActive },
                { [styles.passive]: isPassive },
              )}
              key={id}
            >
              ${prize.toLocaleString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
