"use client";

import styled from "@emotion/styled";
import { StyledProps } from "@/types";

const StyledHome = styled.main<StyledProps>`
  background-color: transparent;
  width: min(98%, var(--max-app-width));
  height: fit-content;
  min-height: 50vh;
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  margin: 0 auto;

  .main_left_col {
    border-radius: var(--app-border) 0 0 var(--app-border);
    box-shadow: 0 0 10px #1d2432;
    background-color: var(--side-bg);
    padding: 10px;
    margin: 0 10px 0 0;
    min-height: var(--min-app-height);
  }

  .main_right_col {
    border-radius: 0 var(--app-border) var(--app-border) 0;
    box-shadow: 0 0 10px #1d2432;
    background-color: var(--side-bg);
    padding: 10px;
    margin: 0 0 0 10px;
    min-height: var(--min-app-height);
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;

    .main_left_col,
    .main_right_col {
      border-radius: 0;
      padding: 10px;
      padding: 0;
      margin: 0;
      position: fixed;
      transition: 0.3s;
      top: 0;
      left: 0;
      z-index: 5;
      width: max(60%, 300px);
      min-height: 100vh;
    }

    .main_left_col {
      top: 0;
      left: 100%;
      transform: translate(
        ${({ showMenu }: any) => (showMenu.right ? "-100%" : "20px")}
      );
    }

    .main_right_col {
      top: 0;
      left: 0;
      z-index: 5;
      transform: translate(
        ${({ showMenu }: any) => (showMenu.left ? "0" : "calc(-100% - 20px)")}
      );
    }
  }
`;

export default StyledHome;
