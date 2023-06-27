"use client";

import { useWeatherContext } from "@/context/store";
import React from "react";
import StyledBase from "./StyledBase";

type Props = {};

export default function Base({}: Props) {
  const { getWeather, weatherData, logText } = useWeatherContext();

  React.useEffect(() => {
    logText(weatherData);
  }, [weatherData]);

  return <StyledBase>
    <div className="wind_speed">
      <h3>Wind</h3>
    </div>
  </StyledBase>;
}
