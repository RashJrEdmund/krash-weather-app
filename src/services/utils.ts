"use client";

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

export const createDayData = (weatherData: any, setDayData: any) => {
  const { list } = weatherData;
  const dayData = ["day 1", "day 2", "day 3", "day 4", "day 5"].map(
    (day, i) => ({ [`${day}`]: list.slice(i, i + 8) })
  );

  console.log(dayData);
};

export const updateDayData = (data: any, day: number, setBaseData: any) => {
  const baseD = [
    {
      quantity: "Wind Speed",
      magnetude: data.list[day].wind.speed,
      unit: "m/s",
    },
    {
      quantity: "Pressure",
      magnetude: data.list[day].main.pressure,
      unit: "hPa",
    },
    {
      quantity: "Humidity",
      magnetude: data.list[day].main.humidity,
      unit: "%",
    },
    {
      quantity: "Visibility",
      magnetude: data.list[day].visibility,
      unit: "km",
    },
  ];

  setBaseData([...baseD]);
};
