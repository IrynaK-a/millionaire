'use client';

import Link from 'next/link';
import clsx from 'clsx';

import { AppRoute } from '@/shared/enums';
import { inter } from '@/styles/fonts';
import { ValueOf } from '@/shared/types';
import { useDispatch } from '@/libs/hooks';

import styles from './LinkButton.module.scss';

type Props = {
  buttonText: string;
  link: ValueOf<typeof AppRoute>;
};

export const LinkButton: React.FC<Props> = ({ buttonText, link }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'startGame',
    });
  };

  return (
    <Link
      href={link}
      className={clsx(styles.button, inter.className)}
      onClick={handleClick}
    >
      {buttonText}
    </Link>
  );
};
