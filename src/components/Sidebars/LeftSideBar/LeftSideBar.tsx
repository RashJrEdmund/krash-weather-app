"use client";

import { useWeatherContext } from "@/context/store";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import StyledLeftSide from "./StyledLeftSide";

type Props = {};

interface IHourData {
  hour: string,
  condition: string,
  temp: string
}

export default function LeftSideBar({ }: Props) {
  const [navHourData, setNavHourData] = useState<IHourData[] | null>(null);

  const router = useRouter();
  const params = useParams();

  const {
    setShowMenu,
    todaysWeather,
    currentTime,
    currentDay,
    setCurrentTime,
    setCurrentWeather,
    weatherForeCast,
  } = useWeatherContext();

  const choseTime = (ind: number, time: string) => {
    const hourRoute = ind + 1;
    const prevDayRoute= params.day.split("/").shift();

    router.push(`/${prevDayRoute}/${hourRoute}`);
    setCurrentTime(time);

    if (weatherForeCast) {
      setCurrentWeather(weatherForeCast[currentDay][ind]); // whenever the day changes, sets current weather to first hour on that day.
    }
  };

  useEffect(() => {
    if (todaysWeather) {
      const hrs: IHourData[] = todaysWeather.map(({ dt_txt, main, weather }: any) => {
        return {
          hour: dt_txt.split(" ").pop(),
          condition: weather[0].description,
          temp: main.temp,
        }
      });


      setCurrentTime(hrs[0]?.hour);

      setNavHourData(hrs);
    }
  }, [todaysWeather]);

  return (
    <StyledLeftSide>
      <h3 onClick={() => setShowMenu({ left: false, right: false })}>
        Krash Weather app
      </h3>

      <p>8 hour forecast a Day</p>

      <ul>
        {navHourData?.map(({ hour, condition, temp }: any, i: number) => (
          <li
            key={hour}
            className={currentTime === hour ? "current_time" : ""}
            onClick={() => choseTime(i, hour)}
          >
            <h4>
              Hour: <span> {hour}</span>
            </h4>
            <p>
              Condition: <span> {condition || ""}</span>
            </p>
            <p>
              temp: <span> {temp || ""} &deg;</span>
            </p>
          </li>
        ))}
      </ul>
    </StyledLeftSide>
  );
}
