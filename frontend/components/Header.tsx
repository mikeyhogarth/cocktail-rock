import React from "react";
import { FaGuitar, FaGlassMartini } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center py-5 md:py-16 border-b">
      <Link href="/">
        <a>
          <h1 className="text-4xl md:text-8xl">
            <FaGuitar className="inline align-bottom text-teal-500" />
            <span className="text-purple-500">Cocktail</span>
            <span className="text-teal-500">Rock</span>
            <FaGlassMartini className="inline align-bottom text-purple-500" />
          </h1>
        </a>
      </Link>
      <p className="md:text-2xl text-gray-500">
        Delicious drinks inspired by classic albums
      </p>
    </header>
  );
}
