"use client"

import React from "react";
import Date_Time from "@/components/Date_time/Date_Time";
import NavBar from "@/components/navbar/NavBar";
import Weather from "@/components/weather/Weather";
import { SlideData } from "@/images";
import StyledMidSection from "./StyledMidSection";
import Base from "@/components/base/Base";

export default function Krashweather() {
  const [photoIndx, setPhotoIndx] = React.useState<number>(0);

  React.useEffect(() => {
    const intId = setInterval(
      () =>
        setPhotoIndx((prev) => {
          if (prev === SlideData.length - 1) return 0;
          return prev + 1;
        }),
      15000
    );

    return () => clearInterval(intId);
  }, []);

  return (
    <StyledMidSection url={SlideData[photoIndx]}>

      <div className="display_section">
        
        <NavBar />
        <Weather />

        <Date_Time />
      </div>

      <Base />
    </StyledMidSection>
  )
}