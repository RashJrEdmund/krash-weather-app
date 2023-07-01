"use client";

import WeatherAPPGaurd from "@/HOC/WeatherAPP";
import { APP_VERSION } from "@/services/constants";
import styled from "@emotion/styled";
const StyledLanding = styled.main`
  background-color: #d5d5d5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    position: relative;
    background-color: #1d2432;
    height: fit-content;
    min-height: 200px;
    width: min(90vw, 500px);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    .versoin {
      position: absolute;
      top: 0;
      left: 0;
      color: green;
      font-size: 15px;
      margin: 15px;
    }

    .text_holder {
      font-size: min(50px, 10vw);

      .text_1 {
        color: #feb949;
        margin: 0 10px 0 0;
      }

      .text_2 {
        color: #d5d5d5;
      }
    }

    .loading_text {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      margin: 0 0 20px;

      &::before {
        content: " ";
        margin: 0;
        position: absolute;
        right: calc(100% + 10px);
        top: calc(25% - 0);
        border-top: 10px solid #feba49;
        border-bottom: 10px solid #feba49;
        border-right: 10px solid #241e45;
        border-left: 10px solid #241e45;
        border-radius: 50px;

        animation: SearchLoading 0.6s linear infinite;
      }
    }
  }
`;

const Home = () => {
  return (
    <StyledLanding>
      <section className="loader">
        <span className="versoin">version : {APP_VERSION}</span>
        <div className="text_holder">
          <span className="text_1">Krash</span>
          <span className="text_2">weather</span>
        </div>

        <span className="loading_text">Loading</span>
      </section>
    </StyledLanding>
  );
};

export default WeatherAPPGaurd(Home);
