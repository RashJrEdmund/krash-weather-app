"use client";

import React from "react";

import { createContext, useContext } from "react";
import { API_KEY } from "../services/constants";
import getData from "@/api/GetData";
import useAlert from "@/hooks/UseAlert";

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
  const [baseData, setBaseData] = React.useState<any>(null);
  const { AlertComponent, displayAlert, alertMsg } = useAlert();
  const customAlert = { AlertComponent, displayAlert, alertMsg };

  const getWeather = (lon: string | number, lat: string | number) => {
    if (!lon || !lat) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    getData(url)
      .then((data) => {
        setWeatherData(data);
        const baseD = [
          { quantity: "Wind Speed", magnetude: data.wind.speed, unit: "m/s" },
          { quantity: "Pressure", magnetude: data.main.pressure, unit: "hPa" },
          { quantity: "Humidity", magnetude: data.main.humidity, unit: "%" },
          { quantity: "Visibility", magnetude: data.visibility, unit: "km" },
        ];

        setBaseData([...baseD]);
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
        baseData,
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
