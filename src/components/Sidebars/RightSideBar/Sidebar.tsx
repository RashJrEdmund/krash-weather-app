"use client";

import React from "react";
import IndexSide from "./SubSide/IndexSide";
import UserSidebar from "./SubSide/UserSidebar";
import { useWeatherContext } from "@/context/store";
import { useRouter } from "next/navigation";
import StyledSideBar from "../StyledSidBar";

type Props = {};

export default function Sidebar({}: Props) {
  const [indexSide, setIndexSide] = React.useState<boolean>(true);

  const { setShowMenu } = useWeatherContext();

  return (
    <StyledSideBar>
      <h3 onClick={() => setShowMenu({ left: false, right: false })}>
        Krash Weather app
      </h3>

      {indexSide ? (
        <IndexSide setIndexSide={setIndexSide} />
      ) : (
        <UserSidebar setIndexSide={setIndexSide} />
      )}
    </StyledSideBar>
  );
}
