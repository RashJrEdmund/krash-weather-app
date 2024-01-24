"use client";

import React, { useEffect } from "react";
import StyledSubSide from "./StyledSubSide";
import { UserIcon } from "@/components/atoms/Icons";
import { useWeatherContext } from "@/context/store";

interface Props { setIndexSide: any };

export default function IndexSide({ setIndexSide }: Props) {
  const {
    _5_days,
    currentDay,
    setCurrentDAy,
    customAlert: { displayAlert },
  } = useWeatherContext();

  const changeDay = (day: string) => {
    displayAlert(`Weather set for ${day}`);

    setCurrentDAy(day);
  };


  return (
    <StyledSubSide>
      <h4 className="index_h4">5 day forecast </h4>

      <ul className="mid_section">
        {_5_days?.map((day, i) => (
          <li
            title={`weather ${i !== 0 ? "on" : "for"} ${day}`}
            className={currentDay === day ? "current_day" : ""}
            key={day}
            onClick={() => changeDay(day)}
          >
            <h3>{day}</h3>
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
