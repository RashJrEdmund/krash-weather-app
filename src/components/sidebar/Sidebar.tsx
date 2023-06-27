"use client";

import React from "react";
import StyledSideBar from "./StyledSideBar";
import IndexSide from "./SubSide/IndexSide";
import UserSidebar from "./SubSide/UserSidebar";
import { useWeatherContext } from "@/context/store";

type Props = {};

export default function Sidebar({}: Props) {
  const [indexSide, setIndexSide] = React.useState<boolean>(true);

  const { setShowMenu } = useWeatherContext();

  return (
    <StyledSideBar>
      <h3 onClick={() => setShowMenu((prev: any) => !prev)}>
        Krash Weather app
      </h3>

      {indexSide ? <IndexSide setIndexSide={setIndexSide} /> : <UserSidebar />}
    </StyledSideBar>
  );
}
