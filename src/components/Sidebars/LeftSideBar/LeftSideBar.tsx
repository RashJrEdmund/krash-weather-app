"use client";

import { useWeatherContext } from "@/context/store";
import { useRouter } from "next/navigation";
import React from "react";
import StyledSideBar from "../StyledSidBar";

type Props = {};

export default function LeftSideBar({}: Props) {
  const router = useRouter();

  const { setShowMenu } = useWeatherContext();

  return (
    <StyledSideBar>
      <h3 onClick={() => setShowMenu((prev: any) => !prev)}>
        Krash Weather app
      </h3>

      <p>3 hour forecast</p>

      <p onClick={() => router.push("krashweather/2")}>Text Navigate</p>
    </StyledSideBar>
  );
}
