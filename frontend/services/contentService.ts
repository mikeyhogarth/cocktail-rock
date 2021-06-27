import client from "../client";
import { Cocktail } from "../types";

// return every cocktail (hard limit of 50 for now)...
const cocktailsQuery = `*[_type == "cocktail"] { name, mainImage, slug, album }[0...50]`;
export async function allCocktails(): Promise<Cocktail[]> {
  return client.fetch(cocktailsQuery);
}

// return single cocktail
const singleCocktailQuery = `*[_type == "cocktail" && slug.current == $slug][0]`;
export async function getCocktail(slug: string): Promise<Cocktail> {
  return client.fetch(singleCocktailQuery, {
    slug,
  });
}

// return every slug
const slugsQuery = `*[_type == "cocktail"] { slug }`;
export async function allSlugs(): Promise<string[]> {
  const cocktails: Cocktail[] = await client.fetch(slugsQuery);
  return cocktails.map((cocktail) => cocktail.slug.current);
}
