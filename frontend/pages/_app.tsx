import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1>Cocktail Rock</h1>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>Cocktail Rock &copy;{new Date().getFullYear()}</footer>
    </>
  );
}
