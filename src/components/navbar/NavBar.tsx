"use client";

"use client"

import React from "react";
import SearchBar from "./SearchBar/SearchBar";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav>
      Krash weather
      <SearchBar />
    </nav>
  );
}
