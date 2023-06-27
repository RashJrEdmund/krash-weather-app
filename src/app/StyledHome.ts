"use client";

import styled from "@emotion/styled";
import { StyledProps } from "@/types";

const StyledHome = styled.main<StyledProps>`
  background-color: transparent;
  width: min(100%, 1300px);
  height: fit-content;
  max-height: 99vh;
  display: grid;
  grid-template-columns: 1fr 30%;
  margin: 0 auto;

  .main_col_1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: fit-content;
    min-height: 90vh;
    padding: 10px 10px 20px 10px;

    .display_section {
      background-color: #1d2432;
      padding: 10px;
      width: 100%;
      height: fit-content;
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;
      gap: 170px;
    }
  }

  .main_col_2 {
    background-color: #1d2432;
    padding: 10px;
    margin: 10px 10px 20px 0;
    min-height: 90vh;
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;

    .main_col_2 {
      padding: 10px;
      padding: 0;
      margin: 0;
      position: fixed;
      transition: 0.3s;
      top: 0;
      left: 0;
      transform: translate(
        ${({ showMenu }) => (showMenu ? "0" : "calc(-100% - 20px)")}
      );
      width: max(60%, 300px);
      min-height: 100vh;
    }
  }
`;

export default StyledHome;
