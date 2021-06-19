import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <main className="px-5 lg:px-20 xl:px-40">
        <Component {...pageProps} />
      </main>
      <footer className="text-center p-5">
        Cocktail Rock &copy;{new Date().getFullYear()}
      </footer>
    </>
  );
}
