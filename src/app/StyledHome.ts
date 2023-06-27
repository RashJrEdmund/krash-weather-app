"use client";

import styled from "@emotion/styled";
import { StyledProps } from "@/types";

const StyledHome = styled.main<StyledProps>`
  background-color: transparent;
  width: 100%;
  height: fit-content;
  /* min-height: 100%; */
  max-height: 99vh;
  display: grid;
  grid-template-columns: 1fr 30%;
  margin: 0;

  .main_col_1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: fit-content;
    min-height: 90%;
    padding: 15px;

    .display_section {
      background-color: green;
      width: 100%;
      height: fit-content;
      min-height: 480px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: start;
      gap: 170px;
    }
  }

  .main_col_2 {
    /* background-color: #ffba51; */
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;

    .main_col_2 {
      position: fixed;
      transition: 0.3s;
      top: 0;
      left: 0;
      transform: translate(
        ${({ showMenu }) => (showMenu ? "0" : "calc(-100% - 20px)")}
      );
      width: max(60%, 300px);
    }
  }
`;

export default StyledHome;
