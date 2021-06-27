import Head from "next/head";
import { Cocktail } from "../types";
import { GetStaticProps } from "next";
import { CocktailCards } from "../components/CocktailCards";
import { allCocktails } from "../services/contentService";
interface Props {
  cocktails: Cocktail[];
}

export default function Home({ cocktails }: Props) {
  return (
    <div>
      <Head>
        <title>Cocktail Rock</title>
        <meta name="description" content="Cocktail Rock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CocktailCards cocktails={cocktails} />
    </div>
  );
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const cocktails = await allCocktails();
  return { props: { cocktails } };
};
