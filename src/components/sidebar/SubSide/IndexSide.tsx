"use client";

import React from "react";
import StyledSubSide from "./StyledSubSide";
import { UserIcon } from "@/components/atoms/Icons";

type Props = { setIndexSide: any };

export default function IndexSide({ setIndexSide }: Props) {
  return (
    <StyledSubSide>
      <h4 className="index_h4">Next 6 days </h4>

      <ul className="mid_section">
        {["day 1", "day 2", "day 3", "day 4", "day 5", "day 6"].map((day) => (
          <li title={`weather for ${day}`} key={day}>
            {day}
          </li>
        ))}
      </ul>

      <p
        className="user_button"
        onClick={() => setIndexSide((prev: boolean) => !prev)}
      >
        <UserIcon />
        user
      </p>
    </StyledSubSide>
  );
}
