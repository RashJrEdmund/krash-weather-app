"use client";

import styled from "@emotion/styled";

const StyledHome = styled.main`
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
      min-height: 200px;
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
`;

export default StyledHome;
