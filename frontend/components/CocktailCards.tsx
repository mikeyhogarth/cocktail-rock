import Link from "next/link";

import { Cocktail } from "../types";
import CocktailImage from "./CocktailImage";
import { FaRecordVinyl, FaBookOpen } from "react-icons/fa";

interface Props {
  cocktails: Cocktail[];
}

export const CocktailCards = ({ cocktails }: Props) => {
  return (
    <ul className="flex flex-wrap justify-center m-2 text-center ">
      {cocktails.map((cocktail) => (
        <li key={cocktail.name} className="my-6 mx-10 flex-initial">
          <div className="w-96">
            <Link href={`/cocktails/${cocktail.slug.current}`}>
              <a>
                <CocktailImage
                  highlightOnHover={true}
                  width={400}
                  height={200}
                  cocktail={cocktail}
                />
              </a>
            </Link>
            <div className="text-left">
              <Link href={`/cocktails/${cocktail.slug.current}`}>
                <a className="text-gray-500 hover:text-gray-800 bold">
                  <h2 className="text-3xl font-extralight">{cocktail.name}</h2>
                </a>
              </Link>
              <p className="text-gray-500 font-light">
                <FaRecordVinyl className="inline align-middle" />{" "}
                {cocktail.album.title}, {cocktail.album.artist}
              </p>
              <q className="text-gray-400 italic font-light">
                {cocktail.album.choiceLyric}
              </q>
              <div className="pt-3">
                <Link href={`/cocktails/${cocktail.slug.current}`}>
                  <a className="inline-block py-1 px-4 rounded bg-gray-200 hover:bg-gray-300 text-gray-500  align-middle">
                    <FaBookOpen className="inline mr-2 align-middle" />
                    <span className="m-1">Read More</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
