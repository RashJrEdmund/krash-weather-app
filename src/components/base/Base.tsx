"use client";

import { useWeatherContext } from "@/context/store";
import React from "react";
import StyledBase from "./StyledBase";

type Props = {};

export default function Base({}: Props) {
  const { getWeather, weatherData } = useWeatherContext();

  React.useEffect(() => {
    console.log({ weatherData });
  }, [weatherData]);

  return <StyledBase>Base</StyledBase>;
}
