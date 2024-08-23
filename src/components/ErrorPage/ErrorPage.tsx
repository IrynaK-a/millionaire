import Image from 'next/image';

import errorIcon from '@/public/error.svg';
import { LinkButton } from '@/components';

import styles from './ErrorPage.module.scss';

type Props = {
  isNotFoundPage?: boolean;
};

export const ErrorPage: React.FC<Props> = ({ isNotFoundPage = false }) => {
  const message = isNotFoundPage ? `Page not found` : `Something went wrong.`;

  const buttonText = isNotFoundPage ? `Go home` : `Refresh Page`;

  return (
    <div className={styles.container}>
      <Image
        src={errorIcon}
        alt="Page not found"
        className={styles.icon}
      />

      <p className={styles.message}>{message}</p>

      <LinkButton
        buttonText={buttonText}
        link="/"
      />
    </div>
  );
};
