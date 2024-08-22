import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { GameProvider } from '@/components/GameContext/GameContext';

import '../styles/global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Millionaire',
  description: 'Millionaire game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
