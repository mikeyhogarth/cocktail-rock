import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="text-3xl text-center bg-black text-white p-5">
        <h1>Cocktail Rock</h1>
      </header>
      <main className="px-40 text-center">
        <Component {...pageProps} />
      </main>
      <footer className="text-center p-5">
        Cocktail Rock &copy;{new Date().getFullYear()}
      </footer>
    </>
  );
}
