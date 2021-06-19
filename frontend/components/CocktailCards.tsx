import Link from "next/link";
import Image from "next/image";
import { Cocktail } from "../types";
import { urlForImage } from "../util";
import { FaRecordVinyl } from "react-icons/fa";

interface Props {
  cocktails: Cocktail[];
}

export const CocktailCards = ({ cocktails }: Props) => {
  const imgWidth = 500;
  const imgHeight = 250;

  return (
    <ul className="flex justify-center m-2">
      {cocktails.map((cocktail) => (
        <li key={cocktail.name} className="flex-initial border m-2 w-2/3">
          <Image
            src={
              urlForImage(cocktail.mainImage)
                .width(imgWidth)
                .height(imgHeight)
                .url() || ""
            }
            alt="Picture of the author"
            width={imgWidth}
            height={imgHeight}
          />
          <div className="text-left">
            <Link href={`/cocktails/${cocktail.slug.current}`}>
              <a className="text-gray-600 bold">
                <h2>{cocktail.name}</h2>
              </a>
            </Link>
            <p className="text-gray-500">
              <FaRecordVinyl className="inline" /> {cocktail.album.title},{" "}
              {cocktail.album.artist}
            </p>
            <q className="text-gray-400 italic">{cocktail.album.choiceLyric}</q>
            <Link href={`/cocktails/${cocktail.slug.current}`}>
              <a className="btn block">Read More</a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
