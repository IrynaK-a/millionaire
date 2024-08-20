import Image from 'next/image';
import HandImage from '@/public/hand.svg';
import styles from './NewGame.module.scss';
import clsx from 'clsx';
import { inter } from '@/styles/fonts';
import { StartGameButton } from '@/components';
import { AppRoute, ButtonText, GameType } from '@/shared/enums';
import { IFineshedGame, INewGame } from '@/shared/interfaces';

type Props = INewGame | IFineshedGame;

export const NewGame: React.FC<Props> = ({ type = 'new', score }) => {
  const isNewGame = type === 'new';
  const buttonText = isNewGame ? ButtonText.START : ButtonText.TRY_AGAIN;

  return (
    <div
      className={clsx(styles.container, {
        [styles.startBackground]: isNewGame,
      })}
    >
      <div className={styles.image}>
        <Image
          src={HandImage}
          alt=""
          fill
        />
      </div>

      <div className={styles.infoSection}>
        <div className={styles.textContainer}>
          {score && <span className={styles.scoreTitle}>Total score:</span>}
          <p className={clsx(styles.text, inter.className)}>
            {score ? `$${score} earned` : 'Who wants to be a millionaire?'}
          </p>
        </div>

        <StartGameButton
          buttonText={buttonText}
          link={AppRoute.GAME}
        />
      </div>
    </div>
  );
};
