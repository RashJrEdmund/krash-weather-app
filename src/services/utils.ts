"use client";

import { DAYS } from "./constants";

export const logText = (data: any) => {
  const { clear, log } = console;
  clear();
  log({ [`${data}`]: data });
};

export const getSessionStorage = (key: string) => {
  const session = sessionStorage.getItem(key);
  if (session) return JSON.parse(session);
  return undefined;
};

export const setSessionStorage = (key: string, value: any) =>
  sessionStorage.setItem(key, JSON.stringify(value));

export const createWeatherData = (data: any, setWeatherData: any) => {
  const { list } = data;
  const dayData: any = { name: data.city.name };

  DAYS.forEach((day, i) => (dayData[`${day}`] = list.slice(i, i + 8)));
  console.log("this dayData", dayData);

  setWeatherData({ ...dayData });
};

export const updateBaseData = (
  weatherData: any,
  dayTime: { day: string; time: number },
  setBaseData: any
) => {
  const baseD = [
    {
      quantity: "Wind Speed",
      magnetude: weatherData[`${dayTime.day}`][dayTime.time].wind.speed,
      unit: "m/s",
    },
    {
      quantity: "Pressure",
      magnetude: weatherData[`${dayTime.day}`][dayTime.time].main.pressure,
      unit: "hPa",
    },
    {
      quantity: "Humidity",
      magnetude: weatherData[`${dayTime.day}`][dayTime.time].main.humidity,
      unit: "%",
    },
    {
      quantity: "Visibility",
      magnetude: weatherData[`${dayTime.day}`][dayTime.time].visibility,
      unit: "km",
    },
  ];

  setBaseData([...baseD]);
};
