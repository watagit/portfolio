import type { FC, ReactNode } from "react";
import { type Metadata } from "next";
import { Header } from "~/component/ui/Header";
import "../style/global.css";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://onwtr.dev"),
  title: "Wataru Ono",
  description: "Wataru Ono's portfolio page",
  openGraph: {
    images: [
      "https://raw.githubusercontent.com/watagit/portfolio/image/og.png",
    ],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
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
      <body>
        <Header />
        <main className="mx-auto w-11/12 sm:w-2/3">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
