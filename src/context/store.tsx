"use client";

import React from "react";

import { createContext, useContext } from "react";
import { API_KEY } from "../services/constants";
import getData from "@/api/GetData";
import useAlert from "@/hooks/UseAlert";
import { createWeatherData } from "@/services/utils";

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
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showOverlay, setShowOverlay] = React.useState<boolean>(false);
  const [pathname, setPathname] = React.useState<string>("/");
  const [dayTime, setDayTime] = React.useState<{ day: string; time: number }>({
    day: "day_1",
    time: 0,
  });

  const { AlertComponent, displayAlert, alertMsg } = useAlert();
  const customAlert = { AlertComponent, displayAlert, alertMsg };

  const getWeather = (lon: string | number, lat: string | number) => {
    if (!lon || !lat) return;

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    getData(url)
      .then((data) => {
        console.clear();
        // setWeatherData(data);
        console.log("this res", data);
        createWeatherData(data, setWeatherData);
      })
      .catch((err) => setError(err));
    // console.log("getting data for", lon, lat, weatherData);
  };

  const logText = (data: any) => {
    const { clear, log } = console;
    clear();
    log({ [`${data}`]: data });
  };

  return (
    <AppContext.Provider
      value={{
        weatherData,
        dayTime,
        setDayTime,
        getWeather,
        logText,
        error,
        showMenu,
        setShowMenu,
        showOverlay,
        setShowOverlay,
        customAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useWeatherContext: () => any = () => useContext(AppContext);
