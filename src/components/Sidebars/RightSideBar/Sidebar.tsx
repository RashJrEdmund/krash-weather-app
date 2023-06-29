"use client";

import React from "react";
import IndexSide from "./SubSide/IndexSide";
import UserSidebar from "./SubSide/UserSidebar";
import { useWeatherContext } from "@/context/store";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

const StyledSideBar = styled.div`
  background-color: transparent;
  color: #ffba51;
  width: 100%;
  height: 100%;
  max-height: calc(90vh + 20px);

  & > h3 {
    color: #ffba51;
  }

  @media only screen and (max-width: 950px) {
    height: 100vh;
    max-height: none;
    padding: 10px;
  }
`;

type Props = {};

export default function Sidebar({}: Props) {
  const [indexSide, setIndexSide] = React.useState<boolean>(true);
  const router = useRouter()

  const { setShowMenu } = useWeatherContext();

  return (
    <StyledSideBar>
      <h3 onClick={() => setShowMenu((prev: any) => !prev)}>
        Krash Weather app
      </h3>

      <p onClick={() => router.push('/2')}>Text Navigate</p>

      {indexSide ? <IndexSide setIndexSide={setIndexSide} /> : <UserSidebar setIndexSide={setIndexSide}  />}
    </StyledSideBar>
  );
}
