"use client";

import { useWeatherContext } from "@/context/store";
import React, { useEffect, useState } from "react";
import StyledWeather from "./StyledWeather";
import Image from "next/image";
import { LocationIcon } from "../atoms/Icons";

type Props = {};

export default function Weather({}: Props) {
  const { weatherData, dayTime } = useWeatherContext();
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (weatherData) setWeather(weatherData[`${dayTime.day}`][dayTime.time]);
  }, [weatherData, dayTime]);

  return (
    <StyledWeather>
      <div className="weather_col_1">
        <p className="location">
          <LocationIcon />
          {weather?.name || "Location"}
        </p>

        <div className="desc_img">
          <div className="description">
            <p className="main">{weather?.weather[0].main || "Weather"}</p>
            <p className="exp">
              {weather?.weather[0].description || "Description"}
            </p>
          </div>

          {weather && (
            <Image
              src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt="weather icon"
              title={`${weather?.weather[0].description}`}
              height="160"
              width="180"
            />
          )}
        </div>
      </div>

      <div className="weather_col_2">
        <div className="temp">
          temp <span> {weather?.main.temp || "T"} &deg;</span>
        </div>
      </div>
    </StyledWeather>
  );
}
