import React from 'react';
import Image from 'next/image';
import './globals.css';
import { Cutive_Mono } from '@next/font/google';

const cutiveMono = Cutive_Mono({
  variable: '--font-cutive-mono',
  weight: '400',
  subsets: ['latin'],
  preload: true,
});

export const metadata = {
  title: 'Sonia Sabade is Online',
  description: 'Based in NYC.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body className={cutiveMono.className}>{children}</body>
    </html>
  )
}