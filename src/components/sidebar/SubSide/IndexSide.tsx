"use client";

import React from "react";
import StyledSideBar from "../StyledSideBar";

type Props = { setIndexSide: any };

export default function IndexSide({ setIndexSide }: Props) {
  return (
    <StyledSideBar>
      <h3>Next 6 days </h3>

      {["day 1", "day 2", "day 3", "day 4", "day 5", "day 6"].map((day) => (
        <p key={day}>{day}</p>
      ))}

      <p onClick={() => setIndexSide((prev: boolean) => !prev)}>user</p>
    </StyledSideBar>
  );
}
