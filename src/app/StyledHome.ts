"use client";

import styled from "@emotion/styled";

const StyledHome = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 30%;

  .main_col_1 {
    background-color: #1d2432;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .main_col_2 {
    /* background-color: #ffba51; */
  }
`;

export default StyledHome;
