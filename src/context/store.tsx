"use client";

import React from "react";

import { createContext, useContext } from "react";
import { API_KEY } from "../services/constants";
import getData from "@/api/GetData";

const AppContext = createContext({});

type Props = {
  children: React.ReactNode;
};

/*
 Imperial units: 26 degrees Celsius is equal to 78.8 degrees Fahrenheit.
 Metric units: 26 degrees Celsius is equal to 26.0 degrees Celsius.
 Standard units: 26 degrees Celsius is equal to 79.8 degrees Rankine.
*/

export const WeatherContextProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = React.useState<any>(null);
  const [error, setError] = React.useState<boolean>(false);

  const getWeather = (lon: string | number, lat: string | number) => {
    if (!lon || !lat) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    getData(url)
      .then((data) => setWeatherData(data))
      .catch((err) => setError(err));
    console.log("getting data for", lon, lat, weatherData);
  };

  const logText = (data: any) => {
    console.clear();
    console.log({ [`${data}`]: data });
  };

  return (
    <AppContext.Provider value={{ weatherData, getWeather, logText, error }}>
      {children}
    </AppContext.Provider>
  );
};

export const useWeatherContext: () => any = () => useContext(AppContext);
