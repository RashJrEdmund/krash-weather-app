"use client";

import React from "react";
import Base from "@/components/base/Base";
import NavBar from "@/components/navbar/NavBar";
import Sidebar from "@/components/sidebar/Sidebar";
import StyledHome from "./StyledHome";
import Weather from "@/components/weather/Weather";
// import img from "../images/img 6.jpeg";

// const SlidData: string[] = ["img 1", "img 2"];

export default function Home() {
  // const [photo, setPhoto] = React.useState({
  //   index: 0,
  //   src: "../images/img 3.jpeg",
  //   name: "One Piece",
  // });

  // const generatephotos = () => {
  //   setPhoto((prev) => {
  //     const index = prev.index === SlidData.length - 1 ? 0 : prev.index + 1;

  //     return { index, src: SlidData[index].img, name: SlidData[index].name };
  //   });
  // };

  return (
    <StyledHome>
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
