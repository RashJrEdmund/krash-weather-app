"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

// interface StyledProps {
//   color?: string;
//   padd?: string;
//   bg?: string;
//   fill?: boolean;
//   weight?: string | number;
//   size?: string;
//   index?: string;
//   margin?: string;
//   loading?: boolean;
//   error?: boolean | any;
//   align?: string;
//   maxW?: boolean | string;
//   opacity?: string;
// }

function generateContent({ loading }) {
  if (loading) {
    return css`
      content: "";
    `;
  }
}

const StyledSearchBar = styled.div`
  .search_bar {
    background-color: transparent;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    input {
      width: min(250px, 57vw);
      min-height: 30px;
      margin: 0 0 0 10px;
      padding: 5px;
    }

    &::after {
      ${generateContent}
      border-top: 10px solid #ffba51;
      border-bottom: 10px solid green;
      border-right: 10px solid #241e45;
      border-left: 10px solid blue;
      border-radius: 50px;

      animation: SearchLoading 0.6s linear infinite;
    }
  }
`;

export default StyledSearchBar;
