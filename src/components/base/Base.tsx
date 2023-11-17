"use client";

import { useWeatherContext } from "@/context/store";
import React, { useEffect, useState } from "react";
import StyledBase from "./StyledBase";
import { StatsIcon } from "../atoms/Icons";

type Props = {};

interface IbaseFields {
  quantity: string,
  magnetude: string | number,
  unit: string,
}

export default function Base({ }: Props) {
  const {
    currentWeather,
    setShowMenu,
    customAlert: { displayAlert },
  } = useWeatherContext();

  const [baseData, setBaseData] = useState<IbaseFields[] | null>(null);

  useEffect(() => {
    if (currentWeather) {
      const baseArr: IbaseFields[] = [
        {
          quantity: "Wind Speed",
          magnetude: currentWeather.wind.speed,
          unit: "m/s",
        },
        {
          quantity: "Pressure",
          magnetude: currentWeather.main.pressure,
          unit: "hPa",
        },
        {
          quantity: "Humidity",
          magnetude: currentWeather.main.humidity,
          unit: "%",
        },
        {
          quantity: "Visibility",
          magnetude: currentWeather.visibility,
          unit: "km",
        },
      ];

      setBaseData(baseArr);
    }

  }, [currentWeather]);

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
