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
    setTime,
    setDay,
    setDayTime,
    customAlert: { displayAlert },
  } = useWeatherContext();
  const router = useRouter();
  const [dates, setDates] = useState<any[]>([]);

  const changeDay = (day: string, dayRoute: number, actualDay: any) => {
    displayAlert(
      `Weather set for ${
        day === "day_1" ? "Today" : `${day.replace("_", " ")}`
      } `
    );

    setDay(actualDay || day);
    setTime("Hs:Mm");

    router.replace(`/krashweather/${dayRoute}/1`);
    setDayTime({ time: 0, day });
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
            title={`weather ${i !== 0 ? "on" : "for"} ${
              dates[i] || day.replace("_", " ")
            }`}
            key={day}
            onClick={() => changeDay(day, i + 1, dates[i])}
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
