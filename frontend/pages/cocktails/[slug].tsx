import client from "../../client";
import { Cocktail } from "../../types";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

const cocktailsQuery = `*[_type == "cocktail"] { slug }`;
const singleCocktailQuery = `*[_type == "cocktail" && slug.current == $slug][0]`;

interface Props {
  cocktail: Cocktail;
}

export default function CocktailPage({ cocktail }: Props) {
  return (
    <>
      <Head>
        <title>{cocktail.name} | Cocktail Rock</title>
        <meta name="description" content="Cocktail Rock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article>
        <h1>{cocktail.name}</h1>
        <p>{cocktail.strapline}</p>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cocktails: Cocktail[] = await client.fetch(cocktailsQuery);

  const paths = cocktails.map((cocktail) => ({
    params: { slug: cocktail.slug.current },
  }));

  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cocktail = await client.fetch(singleCocktailQuery, {
    slug: params?.slug || "",
  });

  return { props: { cocktail } };
};
