"use client";

import React from "react";
import Base from "@/components/base/Base";
import NavBar from "@/components/navbar/NavBar";
import Sidebar from "@/components/sidebar/Sidebar";
import StyledHome from "./StyledHome";
import Weather from "@/components/weather/Weather";
import { useWeatherContext } from "@/context/store";

const SlidData: string[] = [
  "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80",
  "https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1652&q=80",
  "https://images.unsplash.com/photo-1500390365106-166bb67248d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
  "https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1503327431567-3ab5e6e79140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1533675180235-0ba57d720b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=671&q=80",
];

export default function Home() {
  const [photoIndx, setPhotoIndx] = React.useState(0);

  const { showMenu } = useWeatherContext();

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
  );
}
