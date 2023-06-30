"use client";

import styled from "@emotion/styled";

const StyledBase = styled.section`
  box-shadow: 0 0 10px #1d2432;
  background-color: var(--side-bg);
  width: 100%;
  height: fit-content;
  min-height: max(85%, 170px);
  align-self: flex-end;
  margin: 0 auto;
  padding: 17px 10px 20px;
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
      box-shadow: 0 0 10px #ffba51;
      padding: 10px 15px;
      color: #ffba51;
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
    margin: 1rem auto 0;
    min-height: 170px;

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
