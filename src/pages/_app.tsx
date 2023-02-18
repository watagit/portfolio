import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Header } from "@/component/ui/Header";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
