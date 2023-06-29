"use client";

import styled from "@emotion/styled";
import { StyledProps } from "@/types";

const StyledHome = styled.main<StyledProps>`
  background-color: transparent;
  background-color: green;
  width: min(98%, 1300px);
  height: fit-content;
  min-height: 95vh;
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  margin: 2rem auto 1rem;

  .main_left_col {
    border-radius: var(--app-border) 0 0 var(--app-border);
    box-shadow: 0 0 10px #1d2432;
    background-color: #0a0c11;
    padding: 10px;
    margin: 0 10px 0 0;
    min-height: 90vh;
  }

  .main_mid_col {
    background-color: brown;
    min-height: 90vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 30%;
    justify-content: space-between;
    align-items: flex-start;

    .display_section {
      background: linear-gradient(to bottom, #00000070, #00000070, #00000070),
        url(${({ url }) => url});
      box-shadow: 0 0 10px #1d2432;
      background-position: center;
      background-size: cover;
      position: relative;
      padding: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 10px 10px 70px;
    }
  }

  .main_right_col {
    border-radius: 0 var(--app-border) var(--app-border) 0;
    box-shadow: 0 0 10px #1d2432;
    background-color: #0a0c11;
    padding: 10px;
    margin: 0 0 0 10px;
    min-height: 90vh;
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;

    .main_left_col,
    .main_right_col {
      border-radius: 0;
      background: linear-gradient(to bottom, #0a0c11, #0a0c11, #0a0c116f);
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
      right: 0;
      transform: translate(
        ${({ showMenu }) => (showMenu ? "0" : "calc(100% + 20px)")}
      );
    }

    .main_right_col {
      top: 0;
      left: 0;
      z-index: 5;
      transform: translate(
        ${({ showMenu }) => (showMenu ? "0" : "calc(-100% - 20px)")}
      );
    }
  }
`;

export default StyledHome;