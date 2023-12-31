"use client";

import React from "react";
import Sidebar from "@/components/Sidebars/RightSideBar/Sidebar";
import StyledHome from "./StyledHome";
import { useWeatherContext } from "@/context/store";
import { Overlay } from "@/components/atoms/Atoms";
import LeftSideBar from "@/components/Sidebars/LeftSideBar/LeftSideBar";
import Krashweather from "./page";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  const { showMenu, setShowMenu, customAlert } = useWeatherContext();
  const { alertMsg, AlertComponent } = customAlert as any;

  return (
    <>
      {(showMenu.left || showMenu.right) && (
        <Overlay
          opacity="0.5"
          index={3}
          action={() => setShowMenu({ left: false, right: false })}
        />
      )}

      {alertMsg.show && <AlertComponent />}

      <StyledHome showMenu={showMenu}>
        <div className="main_left_col">
          <LeftSideBar />
        </div>

        {/* {children} */}
        <Krashweather /> {/* replace this with children */}


        <div className="main_right_col">
          <Sidebar />
        </div>
      </StyledHome>
    </>
  );
}
