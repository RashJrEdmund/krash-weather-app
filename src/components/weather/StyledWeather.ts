"use client";

import styled from "@emotion/styled";

const StyledWeather = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  margin: 3rem 0 0;

  & * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .weather_col_1 {
    flex: 1;
    width: 100%;

    .location {
      color: #f5f5f5;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 2px;
      white-space: nowrap;
      flex-direction: row;
      gap: 5px;
      align-items: center;
      width: fit-content;
    }

    .desc_img {
      width: 100%;
      padding: 0 0 0 4px;

      .description {
        margin: 15px 0;
        font-size: 17px;

        .main {
          margin: 7px 0;
          font-size: 20px;
          font-weight: 600;
          color: #f5f5f5;
          letter-spacing: 2px;
          flex-direction: row;
          gap: 3px;

          &::after {
            content: " :";
          }
        }

        .exp {
          color: var(--app-gold);
        }
      }

      img {
        object-fit: cover;
      }
    }
  }

  .weather_col_2 {
    flex: 1;
    width: 100%;

    .temp {
      font-size: 15px;
      margin: 15px 0;
      font-weight: 600;
      color: var(--app-gold);

      span {
        font-size: 100px;
        white-space: nowrap;
        color: #f5f5f5;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .desc_img {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .weather_col_2 {
      .temp {
        font-size: 15px;

        span {
          font-size: 60px;
          white-space: nowrap;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    .desc_img {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default StyledWeather;
