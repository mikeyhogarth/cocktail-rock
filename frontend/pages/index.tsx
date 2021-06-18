import Head from "next/head";
import Link from "next/link";
import client from "../client";
import { Cocktail } from "../types";
import { GetStaticProps } from "next";
const cocktailsQuery = `*[_type == "cocktail"] { name, slug }[0...50]`;

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

      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.name}>
            <Link href={`/cocktails/${cocktail.slug.current}`}>
              <a>{cocktail.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cocktails = await client.fetch(cocktailsQuery);
  return { props: { cocktails } };
};
