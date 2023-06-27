"use client";

import { useWeatherContext } from "@/context/store";
import React from "react";
import StyledBase from "./StyledBase";

type Props = {};

export default function Base({}: Props) {
  const { baseData, logText } = useWeatherContext();

  React.useEffect(() => {
    logText(baseData);
  }, [baseData]);

  return (
    <StyledBase>
      {baseData?.map(({ quantity, magnetude, unit }: any) => (
        <div className="data_col" key={quantity + unit}>
          <h3 className="quantity">{quantity}</h3>
          <p className="magnetude" title={`set ${quantity} as default display`}>
            {magnetude}
            <span>{unit}</span>
          </p>
        </div>
      ))}
    </StyledBase>
  );
}
