"use client";

import styled from "@emotion/styled";

const StyledHome = styled.main`
  width: 100%;
  height: fit-content;
  /* min-height: 100%; */
  max-height: 99vh;
  display: grid;
  grid-template-columns: 1fr 30%;
  margin: 0;

  .main_col_1 {
    background-color: #1d2432;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: fit-content;
    min-height: 100%;

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

      .temp {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 15px;

        span {
          font-size: 100px;
          font-weight: 600;
        }
      }
    }
  }

  .main_col_2 {
    /* background-color: #ffba51; */
  }
`;

export default StyledHome;
