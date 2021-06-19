import React from "react";
import { FaGuitar, FaGlassMartini } from "react-icons/fa";

export default function Header() {
  return (
    <header className="text-4xl md:text-8xl text-center py-5 md:py-20 border-b">
      <h1>
        <FaGuitar className="inline align-bottom text-teal-500" />
        <span className="text-purple-500">Cocktail</span>
        <span className="text-teal-500">Rock</span>
        <FaGlassMartini className="inline align-bottom text-purple-500" />
      </h1>
    </header>
  );
}
