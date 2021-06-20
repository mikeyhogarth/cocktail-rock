import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center py-3 md:py-10 border-b">
      <Link href="/">
        <a>
          <h1 className="text-4xl md:text-8xl font-black capitalize font-serif">
            <span className="text-purple-400">Cocktail</span>
            <span className="text-teal-400">Rock</span>
          </h1>
        </a>
      </Link>
      <p className="md:text-xl text-gray-500 font-sans">
        Delicious drinks inspired by classic albums
      </p>
    </header>
  );
}
