"use client";

import { useWeatherContext } from "@/context/store";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import StyledLeftSide from "./StyledLeftSide";

type Props = {};

export default function LeftSideBar({}: Props) {
  const [hours, setHours] = useState<any>(null);
  const router = useRouter();
  const pathName = usePathname();

  const { setShowMenu, dayTime, setDayTime, weatherData } = useWeatherContext();

  const choseTime = (ind: number) => {
    router.push(`/krashweather/2/${ind + 1}`);
    setDayTime((prev: any) => ({ ...prev, time: ind }));
  };

  useEffect(() => {
    console.log({ pathName });
  }, [pathName]);

  useEffect(() => {
    if (weatherData) {
      const hrs = weatherData[`${dayTime.day}`].map((hr) => hr);

      setHours(hrs);

      console.log(weatherData, hrs);
    }
  }, [dayTime, weatherData]);

  return (
    <StyledLeftSide>
      <h3 onClick={() => setShowMenu((prev: any) => !prev)}>
        Krash Weather app
      </h3>

      <p>8 hours forecast a Day</p>

      <p onClick={() => router.push("krashweather/2")}>Text Navigate</p>

      <ul>
        {hours?.map((hour: any, i: number) => (
          <li key={hour.dt_txt} onClick={() => choseTime(i)}>
            <h4>
              Hour: <span>{hour.dt_txt.split(" ").pop()}</span>
            </h4>
            <p>
              Condition: <span>{hour.weather[0].description}</span>
            </p>
            <p>
              temp: <span>{hour.main.temp} &deg;</span>
            </p>
          </li>
        ))}
      </ul>
    </StyledLeftSide>
  );
}
