"use client";

import styled from "@emotion/styled";

const StyledBase = styled.section`
  box-shadow: 0 0 10px #1d2432;
  background-color: var(--side-bg);
  width: 100%;
  height: fit-content;
  /* min-height: min(85%, 170px); */
  min-height: 100%;
  align-self: flex-end;
  margin: 0 auto;
  padding: 17px 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;

  .data_col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .quantity {
      font-size: 20px;
      border-bottom: 1px solid #808080;
      padding: 0 0 9px 0;
      white-space: nowrap;
      color: #ddd;
    }

    .magnetude {
      border-radius: 5px;
      box-shadow: 0 0 10px var(--app-gold);
      padding: 10px 15px;
      color: var(--app-gold);
      width: 100%;
      margin: 10px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      white-space: nowrap;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 950px) {
    border-radius: 0 0 var(--app-border) var(--app-border);
    flex-wrap: wrap;
    padding: 10px;
    /* margin: 1rem auto 0; */
    /* min-height: 170px;
    min-height: 100%; */

    .data_col {
      display: flex;
      flex-wrap: wrap;

      .quantity {
        //
      }

      .magnetude {
        //
      }
    }
  }
`;

export default StyledBase;
