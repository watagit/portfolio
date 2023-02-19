import type { AppProps } from "next/app";
import NextHeadSeo from "next-head-seo";
import "tailwindcss/tailwind.css";

import { Header } from "@/component/ui/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
