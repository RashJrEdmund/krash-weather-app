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

const StyledSearchBar = styled.div<{ fetching: boolean; index?: number }>`
  background-color: transparent;
  position: relative;

  .search_bar {
    position: relative;
    background-color: transparent;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    input {
      background-color: transparent;
      color: #feba49;
      font-size: 16px;
      width: min(300px, 57vw);
      min-height: 40px;
      padding: 5px 10px;
      border: 1px solid #feba49;
      border-radius: 10px;

      &::placeholder {
        color: #feba4969;
      }

      &:focus {
        outline: none;
      }
    }

    &::before {
      ${generateContent}
      margin: 0;
      position: absolute;
      right: calc(100% + 10px);
      top: calc(25% - 0);
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
    z-index: ${({ index = 4 }) => index};
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;

export default StyledSearchBar;
