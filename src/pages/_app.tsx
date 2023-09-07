import type { AppProps } from "next/app";
import Head from "next/head";
import NextHeadSeo from "next-head-seo";

import { Header } from "~/component/ui/Header";
import "~/style/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NextHeadSeo
        title="Wataru Ono"
        description="Wataru Ono's portfolio page"
        og={{
          title: "Wataru Ono",
          image:
            "https://raw.githubusercontent.com/watagit/portfolio/image/og.png",
        }}
      />
      <Header />
      <main className="mx-auto w-11/12 sm:w-2/3">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
