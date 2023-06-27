"use client";

import { useWeatherContext } from "@/context/store";
import React from "react";
import StyledWeather from "./StyledWeather";
import Image from "next/image";

type Props = {};

export default function Weather({}: Props) {
  const { weatherData } = useWeatherContext();

  React.useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <StyledWeather>
      <div className="weather_col_1">
        <p className="location">!Yaounde</p>

        {weatherData && (
          <Image
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
            height="200"
            width="200"
          />
        )}

        <div className="description">
          <p className="main">{weatherData?.weather[0].main || "Rain"}</p>
          <p>{weatherData?.weather[0].description || "Heavy Rain"}</p>
        </div>
      </div>

      <div className="weather_col_2">
        <div className="temp">
          temp <span> {weatherData?.main.temp || "17"} &deg;</span>
        </div>
      </div>
    </StyledWeather>
  );
}
