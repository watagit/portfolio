import { type Metadata } from "next";
import type { FC, ReactNode } from "react";

import { Header } from "~/component/ui/Header";
import "~/style/global.css";

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
      <body>
        <Header />
        <main className="mx-auto w-11/12 sm:w-2/3">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
