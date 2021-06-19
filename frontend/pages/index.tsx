import Head from "next/head";
import client from "../client";
import { Cocktail } from "../types";
import { GetStaticProps } from "next";
import { CocktailCards } from "../components/CocktailCards";
const cocktailsQuery = `*[_type == "cocktail"] { name, mainImage, slug, album }[0...50]`;

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
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cocktails = await client.fetch(cocktailsQuery);
  return { props: { cocktails } };
};
