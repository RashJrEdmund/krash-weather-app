"use client";

import { useWeatherContext } from "@/context/store";
import styled from "@emotion/styled";
import React from "react";

const StyledWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & * {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .temp {
    font-size: 15px;
    margin: 15px 0;
    font-weight: 600;

    span {
      font-size: 100px;
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
`;

type Props = {};

export default function Weather({}: Props) {
  const { weatherData } = useWeatherContext();

  React.useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <StyledWeather>
      <div className="temp">
        temp <span> {weatherData?.main.temp || "17"} &deg;</span>
      </div>

      <div className="description">
        <p className="main">{weatherData?.weather[0].main || "Rain"}</p>
        <p>{weatherData?.weather[0].description || "Heavy Rain"}</p>
      </div>
    </StyledWeather>
  );
}
