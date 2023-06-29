"use client";

import { useWeatherContext } from "@/context/store";
import React, { useEffect, useState } from "react";
import StyledBase from "./StyledBase";
import { updateBaseData } from "@/services/utils";
import { StatsIcon } from "../atoms/Icons";

type Props = {};

export default function Base({}: Props) {
  const {
    weatherData,
    dayTime,
    setShowMenu,
    customAlert: { displayAlert },
  } = useWeatherContext();

  const [baseData, setBaseData] = useState<any>(null);

  useEffect(() => {
    weatherData && updateBaseData(weatherData, dayTime, setBaseData);
  }, [dayTime, weatherData]);

  return (
    <>
      <StatsIcon onClick={() => setShowMenu({ left: false, right: true })} />

      <StyledBase>
        {baseData?.map(({ quantity, magnetude, unit }: any) => (
          <div className="data_col" key={quantity + unit}>
            <h3 className="quantity">{quantity}</h3>
            <p
              className="magnetude"
              title={`set ${quantity} as default display`}
              onClick={() => displayAlert("This feature is not yet available")}
            >
              {magnetude}
              <span>{unit}</span>
            </p>
          </div>
        ))}
      </StyledBase>
    </>
  );
}
