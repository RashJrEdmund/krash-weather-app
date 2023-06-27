"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

function generateContent({ fetching }: { fetching: boolean }) {
  if (fetching) {
    return css`
      content: "";
    `;
  }
}

const StyledSearchBar = styled.div<{ fetching: boolean }>`
  background-color: transparent;
  position: relative;

  .search_bar {
    position: relative;
    background-color: transparent;
    background-color: gold;
    width: fit-content;
    width: min(300px, 57vw);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    input {
      width: 100%;
      min-height: 30px;
      padding: 5px;

      &:focus {
        outline: none;
      }
    }

    &::before {
      ${generateContent}
      border-top: 10px solid #ffba51;
      border-bottom: 10px solid green;
      border-right: 10px solid #241e45;
      border-left: 10px solid blue;
      border-radius: 50px;

      animation: SearchLoading 0.6s linear infinite;
    }
  }

  .show_locations {
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledSearchBar;
