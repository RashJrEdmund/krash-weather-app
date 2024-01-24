"use client";

import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styled from "@emotion/styled";
import { useWeatherContext } from "@/context/store";
import { MenuIcon } from "../atoms/Icons";

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  .logo {
    .krash_text {
      color: #ffba51;
      font-size: 25px;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 950px) {
    .krash_text {
      display: none;
    }
  }
`;

interface Props {};

export default function NavBar({}: Props) {
  const { setShowMenu } = useWeatherContext();

  return (
    <StyledNav>
      <span className="logo" title="Krash Weather app">
        <MenuIcon onClick={() => setShowMenu({ left: true, right: false })} />
        <div className="krash_text">Krash weather</div>
      </span>

      <SearchBar />
    </StyledNav>
  );
}
