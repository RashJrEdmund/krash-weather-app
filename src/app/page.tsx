"use client";

import React from "react";
import Base from "@/components/base/Base";
import NavBar from "@/components/navbar/NavBar";
import Sidebar from "@/components/sidebar/Sidebar";
import StyledHome from "./StyledHome";
import Weather from "@/components/weather/Weather";
import { useWeatherContext } from "@/context/store";
import { SlidData } from "@/images";
import { Overlay } from "@/components/atoms/Atoms";

export default function Home() {
  const [photoIndx, setPhotoIndx] = React.useState(0);

  const { showMenu, setShowMenu } = useWeatherContext();

  React.useEffect(() => {
    const intId = setInterval(
      () =>
        setPhotoIndx((prev) => {
          if (prev === SlidData.length - 1) return 0;
          return prev + 1;
        }),
      10000
    );

    return () => clearInterval(intId);
  }, []);

  return (
    <>
      {showMenu && <Overlay index={3} action={() => setShowMenu(false)}/>}

      <StyledHome showMenu={showMenu} url={SlidData[photoIndx]}>
        <div className="main_col_1">
          <section className="display_section">
            <NavBar />
            <Weather />
          </section>

          <Base />
        </div>

        <div className="main_col_2">
          <Sidebar />
        </div>
      </StyledHome>
    </>
  );
}
