import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <main className="sm:px-5 lg:px-40 text-center ">
        <Component {...pageProps} />
      </main>
      <footer className="text-center p-5">
        Cocktail Rock &copy;{new Date().getFullYear()}
      </footer>
    </>
  );
}
