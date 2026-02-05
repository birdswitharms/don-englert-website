import React from 'react';
import { Playfair_Display, Lora } from 'next/font/google';
import Header from '../components/Header';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${playfair.variable} ${lora.variable} ${lora.className}`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;