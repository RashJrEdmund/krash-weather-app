"use client";

import React from "react";
import Base from "@/components/base/Base";
import NavBar from "@/components/navbar/NavBar";
import Sidebar from "@/components/Sidebars/RightSideBar/Sidebar";
import StyledHome from "./StyledHome";
import Weather from "@/components/weather/Weather";
import { useWeatherContext } from "@/context/store";
import { SlidData } from "@/images";
import { Overlay } from "@/components/atoms/Atoms";
import useAlert from "@/hooks/UseAlert";
import { usePathname, useRouter, useParams } from "next/navigation";
import LeftSideBar from "@/components/Sidebars/LeftSideBar/LeftSideBar";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  const [photoIndx, setPhotoIndx] = React.useState(0);
  const routname = usePathname();
  const router = useRouter();
  const params = useParams();

  const { showMenu, setShowMenu, customAlert, pathname, setPathname } =
    useWeatherContext();
  const { alertMsg, AlertComponent } = customAlert;

  React.useEffect(() => {
    const intId = setInterval(
      () =>
        setPhotoIndx((prev) => {
          if (prev === SlidData.length - 1) return 0;
          return prev + 1;
        }),
      15000
    );

    return () => clearInterval(intId);
  }, []);

  React.useEffect(() => {
    console.log(router, params, routname);
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

      <StyledHome showMenu={showMenu} url={SlidData[photoIndx]}>
        <div className="main_left_col">
          <LeftSideBar />
        </div>

        <div className="main_mid_col">
          <section className="display_section">
            <NavBar />
            <Weather />
          </section>

          <Base />
        </div>

        <div className="main_right_col">
          <Sidebar />
        </div>
      </StyledHome>

      <p>{children}</p>
    </>
  );
}
