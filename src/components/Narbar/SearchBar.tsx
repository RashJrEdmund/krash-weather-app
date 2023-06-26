"use client";

import React from "react";

type Props = {};

export default function SearchBar({}: Props) {
  const [location, setLocation] = React.useState<string>("");

  
  return (
    <div>
      Search bar
      <input
        type="text"
        placeholder="search location"
        onChange={({ target: { value } }) => setLocation(value)}
      />
    </div>
  );
}
