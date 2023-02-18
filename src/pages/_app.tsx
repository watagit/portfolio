import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Header } from "@/component/ui/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto w-11/12 sm:w-2/3">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
