"use client";

import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styled from "@emotion/styled";
import { useWeatherContext } from "@/context/store";

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

type Props = {};

export default function NavBar({}: Props) {
  const { setShowMenu } = useWeatherContext();

  return (
    <StyledNav>
      <span onClick={() => setShowMenu((prev: any) => !prev)}>
        Krash weather
      </span>
      <SearchBar />
    </StyledNav>
  );
}
