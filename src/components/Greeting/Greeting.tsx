import clsx from 'clsx';
import Image from 'next/image';
import HandImage from '@/public/hand.svg';
import { inter } from '@/styles/fonts';
import { LinkButton } from '@/components';
import { AppRoute, ButtonText } from '@/shared/enums';
import { IFineshedGame, INewGame } from '@/shared/interfaces';

import styles from './Greeting.module.scss';

type Props = INewGame | IFineshedGame;

export const Greeting: React.FC<Props> = ({ type = 'start', score }) => {
  const isNewGame = type === 'start';
  const buttonText = isNewGame ? ButtonText.START : ButtonText.TRY_AGAIN;

  return (
    <main
      className={clsx(styles.container, {
        [styles.startBackground]: isNewGame,
      })}
    >
      <div className={styles.image}>
        <Image
          src={HandImage}
          alt="hand image"
          fill
        />
      </div>

      <div className={styles.infoSection}>
        <div className={styles.textContainer}>
          {!isNewGame && (
            <span className={styles.scoreTitle}>Total score:</span>
          )}
          <p className={clsx(styles.text, inter.className)}>
            {!isNewGame
              ? `$${score?.toLocaleString()} earned`
              : 'Who wants to be a millionaire?'}
          </p>
        </div>

        <LinkButton
          buttonText={buttonText}
          link={AppRoute.GAME}
        />
      </div>
    </main>
  );
};
