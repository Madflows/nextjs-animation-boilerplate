import { useSmoothScroll } from '@/utils/libs/lenis';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  useSmoothScroll();
  return (
    <>
      <title>NextJS Animation Boilerplate</title>

      <div className={`${inter.className}`}>{children}</div>
    </>
  );
}
