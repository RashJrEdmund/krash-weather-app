"use client";

import React from "react";
import Sidebar from "@/components/Sidebars/RightSideBar/Sidebar";
import StyledHome from "./StyledHome";
import { useWeatherContext } from "@/context/store";
import { Overlay } from "@/components/atoms/Atoms";
import { usePathname, useRouter, useParams } from "next/navigation";
import LeftSideBar from "@/components/Sidebars/LeftSideBar/LeftSideBar";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  const routname = usePathname();
  const router = useRouter();
  const params = useParams();

  const { showMenu, setShowMenu, customAlert } = useWeatherContext();
  const { alertMsg, AlertComponent } = customAlert as any;

  React.useEffect(() => {
    // console.log(router, params, routname);
  }, [routname]);

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

        {children}

        <div className="main_right_col">
          <Sidebar />
        </div>
      </StyledHome>
    </>
  );
}
