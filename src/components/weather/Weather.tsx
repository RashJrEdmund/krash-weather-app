"use client";

import { useWeatherContext } from "@/context/store";
import React, { useEffect, useState } from "react";
import StyledWeather from "./StyledWeather";
import Image from "next/image";
import { LocationIcon } from "../atoms/Icons";

type Props = {};

export default function Weather({ }: Props) {
  const { currentWeather, location } = useWeatherContext();

  return (
    <StyledWeather>
      <div className="weather_col_1">
        <p className="location">
          <LocationIcon />
          {location?.location || "Location"}
        </p>

        <div className="desc_img">
          <div className="description">
            <p className="main">{currentWeather?.weather[0].main || "Weather"}</p>
            <p className="exp">
              {currentWeather?.weather[0].description || "Description"}
            </p>
          </div>

          {currentWeather && (
            <Image
              src={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
              alt="weather icon"
              title={`${currentWeather?.weather[0].description}`}
              height="160"
              width="180"
            />
          )}
        </div>
      </div>

      <div className="weather_col_2">
        <div className="temp">
          temp <span> {currentWeather?.main.temp || "T"} &deg;</span>
        </div>
      </div>
    </StyledWeather>
  );
}
