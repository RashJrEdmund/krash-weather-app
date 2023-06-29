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
