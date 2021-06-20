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
      <footer className="text-center p-10 mt-10 bg-gray-100 text-gray-500 border-t">
        Cocktail Rock &copy;{new Date().getFullYear()}
      </footer>
    </>
  );
}
