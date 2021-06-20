import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Slug {
  current: string;
}

export interface Cocktail {
  name: string;
  slug: Slug;
  mainImage: SanityImageSource;
  ingredients: string;
  method: string;
  album: Album;
  detail: string;
}

export interface Album {
  title: string;
  artist: string;
  choiceLyric: string;
  releaseYear: number;
  recordedAt: string;
  genre: string;
  detail: string;
}
