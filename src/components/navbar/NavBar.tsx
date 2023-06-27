"use client";

import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

type Props = {};

export default function NavBar({}: Props) {
  return (
    <StyledNav>
      Krash weather
      <SearchBar />
    </StyledNav>
  );
}
