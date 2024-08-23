import clsx from 'clsx';

import { IGameQuestion } from '@/shared/interfaces';
import { useGameState } from '@/libs/hooks';
import { MenuShapeContainer } from '@/components';
import gameData from '@/public/api/game.json';

import styles from './SideMenu.module.scss';

type Props = {
  isMenuOpen: boolean;
  closeMenu: (value: boolean) => void;
};

export const SideMenu: React.FC<Props> = ({ isMenuOpen, closeMenu }) => {
  const reversedData: IGameQuestion[] = [...gameData].reverse();

  const { questionInfo } = useGameState();
  const { prize: activePrize } = questionInfo;

  return (
    <div
      className={clsx(styles.container, {
        [styles.isOpen]: isMenuOpen,
      })}
    >
      <nav className={styles.nav}>
        <button
          type="button"
          aria-label="close side menu"
          className={styles.navButton}
          onClick={() => closeMenu(false)}
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
