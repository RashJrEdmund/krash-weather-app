"use client";

import React from "react";
import StyledSideBar from "./StyledSideBar";
import IndexSide from "./SubSide/IndexSide";
import UserSidebar from "./SubSide/UserSidebar";

type Props = {};

export default function Sidebar({}: Props) {
  const [indexSide, setIndexSide] = React.useState<boolean>(true);

  return (
    <StyledSideBar>
      <h3>Krash Weather app</h3>

      {indexSide ? <IndexSide setIndexSide={setIndexSide} /> : <UserSidebar />}
    </StyledSideBar>
  );
}
