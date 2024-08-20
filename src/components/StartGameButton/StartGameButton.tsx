import clsx from 'clsx';
import Link from 'next/link';

import { AppRoute } from '@/shared/enums';
import { inter } from '@/styles/fonts';
import { ValueOf } from '@/shared/types/valueOf.type';

import styles from './StartGameButton.module.scss';

type Props = {
  buttonText: string;
  link: ValueOf<typeof AppRoute>;
};

export const StartGameButton: React.FC<Props> = ({ buttonText, link }) => {
  return (
    <Link
      href={link}
      className={clsx(styles.button, inter.className)}
    >
      {buttonText}
    </Link>
  );
};
