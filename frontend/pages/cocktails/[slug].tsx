import client from "../../client";
import CocktailImage from "../../components/CocktailImage";
import { Cocktail } from "../../types";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
const BlockContent = require("@sanity/block-content-to-react");

const cocktailsQuery = `*[_type == "cocktail"] { slug }`;
const singleCocktailQuery = `*[_type == "cocktail" && slug.current == $slug][0]`;

interface Props {
  cocktail: Cocktail;
}

export default function CocktailPage({ cocktail }: Props) {
  return (
    <div>
      <Head>
        <title>{cocktail.name} | Cocktail Rock</title>
        <meta name="description" content="Cocktail Rock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="py-6 lg:flex text-center lg:text-left">
        <div className="lg:hidden flex-grow">
          <CocktailImage width={500} height={500} cocktail={cocktail} />
        </div>
        <div className="lg:flex-auto lg:pr-10 mt-5 lg:mt-0">
          <h2 className="text-3xl font-extralight">{cocktail.name}</h2>
          <p className="text-gray-500 font-light align-top pb-2">
            <span className="inline-block">
              Inspired by the album <strong>{cocktail.album.title}</strong>,
              recorded in {cocktail.album.releaseYear} by{" "}
              <strong>{cocktail.album.artist}</strong>
            </span>
          </p>
          <BlockContent
            blocks={cocktail.ingredients}
            className="blockContent py-2"
          />
          <p className="italic">Shake with ice</p>
          <h2 className="mt-6 text-3xl font-extralight">About the Drink</h2>
          <BlockContent blocks={cocktail.detail} className="blockContent" />
          <h2 className="mt-10 text-3xl font-extralight">About the Album</h2>
          <q className="italic text-gray-600 font-light">
            {cocktail.album.choiceLyric}
          </q>
          <BlockContent
            blocks={cocktail.album.detail}
            className="blockContent"
          />
        </div>
        <div className="hidden lg:block flex-none">
          <CocktailImage width={500} height={500} cocktail={cocktail} />
        </div>
      </article>
    </div>
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
