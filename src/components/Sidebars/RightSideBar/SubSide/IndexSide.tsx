"use client";

import React, { useEffect, useState } from "react";
import StyledSubSide from "./StyledSubSide";
import { UserIcon } from "@/components/atoms/Icons";
import { useWeatherContext } from "@/context/store";
import { usePathname, useRouter } from "next/navigation";
import { DAYS } from "@/services/constants";
import { getDay } from "@/services/utils";

type Props = { setIndexSide: any };

export default function IndexSide({ setIndexSide }: Props) {
  const {
    weatherData,
    dayTime,
    setDayTime,
    customAlert: { displayAlert },
  } = useWeatherContext();
  const router = useRouter();
  const [dates, setDates] = useState<any[]>([]);

  const changeDay = (day: string, dayRoute: number) => {
    displayAlert(
      `Weather set for ${
        day === "day_1" ? "Today" : `${day.replace("_", " ")}`
      } `
    );

    router.replace(`/krashweather/${dayRoute}/${dayTime.time + 1}`);
    setDayTime((prev: any) => ({ ...prev, day }));
  };

  useEffect(() => {
    if (weatherData) {
      const days = DAYS.map((day) =>
        getDay(new Date(weatherData[`${day}`][0].dt_txt))
      );

      setDates(days);
    }
  }, [weatherData]);

  return (
    <StyledSubSide>
      <h4 className="index_h4">5 day forecast </h4>

      <ul className="mid_section">
        {DAYS?.map((day, i) => (
          <li
            title={`weather on ${dates[i] || day.replace("_", " ")}`}
            key={day}
            onClick={() => changeDay(day, i + 1)}
          >
            <h3>{dates[i] || day.replace("_", " ")}</h3>
            <p>T &deg;</p>
          </li>
        ))}
      </ul>

      <p
        className="user_button"
        onClick={() => setIndexSide((prev: boolean) => !prev)}
      >
        <UserIcon />
        Account
      </p>
    </StyledSubSide>
  );
}
