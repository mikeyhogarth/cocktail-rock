import React from "react";
import Image from "next/image";
import { Cocktail } from "../types";
import { urlForImage } from "../util";

interface Props {
  cocktail: Cocktail;
  width: number;
  height: number;
  highlightOnHover?: boolean;
}

const CocktailImage = ({
  width,
  height,
  cocktail,
  highlightOnHover,
}: Props) => {
  return (
    <Image
      className={`${highlightOnHover && "hover:opacity-90"}`}
      src={
        urlForImage(cocktail.mainImage).width(width).height(height).url() || ""
      }
      alt={`Picture of ${cocktail.name}`}
      width={width}
      height={height}
    />
  );
};

export default CocktailImage;
