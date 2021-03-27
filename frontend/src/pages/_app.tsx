import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

import "../styles/global.css";
import { ReactNode } from "react";

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />;
};

export default MyApp;
