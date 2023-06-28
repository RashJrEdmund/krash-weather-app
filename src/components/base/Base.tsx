"use client";

import { useWeatherContext } from "@/context/store";
import React from "react";
import StyledBase from "./StyledBase";

type Props = {};

export default function Base({}: Props) {
  const {
    baseData,
    customAlert: { displayAlert },
  } = useWeatherContext();

  return (
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
  );
}
