"use client";

import Base from "@/components/base/Base";
import NavBar from "@/components/navbar/NavBar";
import Sidebar from "@/components/sidebar/Sidebar";
import StyledHome from "./StyledHome";

export default function Home() {
  return (
    <StyledHome>
      <div className="main_col_1">
        <section>
          <NavBar />
          <div className="temp">temp 10 deg</div>
        </section>

        <Base />
      </div>

      <div className="main_col_2">
        <Sidebar />
      </div>
    </StyledHome>
  );
}
