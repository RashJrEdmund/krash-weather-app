"use client";

import styled from "@emotion/styled";

const StyledWeather = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;

  & * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .weather_col_1 {
    background-color: gold;
    width: 100%;

    .location {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 2px;
      margin: 10px 0 4rem;
    }

    .temp {
      font-size: 15px;
      margin: 15px 0;
      font-weight: 600;

      span {
        font-size: 100px;
        white-space: nowrap;
      }
    }

    .description {
      margin: 15px 0;
      font-size: 17px;

      .main {
        margin: 7px 0;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 2px;
        flex-direction: row;
        gap: 3px;

        &::after {
          content: " :";
        }
      }
    }
  }

  .weather_col_2 {
    width: 100%;
    background-color: gray;

    .temp {
      font-size: 15px;
      margin: 15px 0;
      font-weight: 600;

      span {
        font-size: 100px;
        white-space: nowrap;
      }
    }
  }
`;

export default StyledWeather;
