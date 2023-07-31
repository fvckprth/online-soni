import React from 'react';
import Head from 'next/head';
import './globals.css';
import { Cutive_Mono } from '@next/font/google';

const cutiveMono = Cutive_Mono({
  variable: '--font-cutive-mono',
  weight: '400',
  subsets: ['latin'],
  preload: true,
});

export const metadata = {
  title: '◉ Sonia Sabade [ONLINE]',
  description: 'Based in NYC.',
  siteUrl: 'https://www.onlinesoni.com',
  twitterHandle: '@onlinesoni'
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Parth Patel, East Park, P307, New York Founder, Tech, Startups, Films, Music" />
        <link rel="canonical" href={metadata.siteUrl} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/fallen-angels.jpeg" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />

        <meta httpEquiv="content-language" content="en" />
      </Head>
      <body className={cutiveMono.className}>{children}</body>
    </html>
  )
}