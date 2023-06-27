"use client";

import { useWeatherContext } from "@/context/store";
import React from "react";
import StyledWeather from "./StyledWeather";
import Image from "next/image";
import { LocationIcon } from "../Icons";

type Props = {};

export default function Weather({}: Props) {
  const { weatherData } = useWeatherContext();

  React.useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <StyledWeather>
      <div className="weather_col_1">
        <p className="location">
          <LocationIcon />
          {weatherData?.name || "Location"}
        </p>

        <div className="description">
          <p className="main">{weatherData?.weather[0].main || "Weather"}</p>
          <p>{weatherData?.weather[0].description || "Description"}</p>
        </div>

        {weatherData && (
          <Image
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
            height="160"
            width="180"
          />
        )}
      </div>

      <div className="weather_col_2">
        <div className="temp">
          temp <span> {weatherData?.main.temp || "17"} &deg;</span>
        </div>
      </div>
    </StyledWeather>
  );
}
