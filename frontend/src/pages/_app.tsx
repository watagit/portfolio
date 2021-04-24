import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />;
};

export default MyApp;
