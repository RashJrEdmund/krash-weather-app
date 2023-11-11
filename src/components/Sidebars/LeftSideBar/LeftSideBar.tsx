"use client";

import { useWeatherContext } from "@/context/store";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import StyledLeftSide from "./StyledLeftSide";

type Props = {};

export default function LeftSideBar({ }: Props) {
  const [navHourData, setNavHourData] = useState<{
    hour: string,
    condition: string,
    temp: string
  }[] | null>(null);

  const router = useRouter();
  const pathName = usePathname();

  const { setShowMenu, todaysWeather, setTime } = useWeatherContext();

  const choseTime = (ind: number, time: string) => {
    router.push(`/krashweather/1/${ind + 1}`);
    setTime(time);
  };

  useEffect(() => {
    // console.log({ pathName });
  }, [pathName]);

  useEffect(() => {
    if (todaysWeather) {
      const hrs = todaysWeather.map(({ dt_txt, main, weather }: any) => {
        return {
          hour: dt_txt.split(" ").pop(),
          condition: weather[0].description,
          temp: main.temp,
        }
      });

      setNavHourData(hrs);
    }

    console.log("todaysWeather in leftside bar", todaysWeather);
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
