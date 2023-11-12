import { useWeatherContext } from "@/context/store";
import styled from "@emotion/styled";
import React from "react";

type Props = { location: any };

const StyledLocation = styled.div`
  background: linear-gradient(to bottom, #1d2432e4, #1d2432e4, #1d2432e4);
  box-shadow: -5px 5px 5px #f5f5f54f;
  color: #292148;
  color: #fff;
  height: fit-content;
  width: fit-content;
  min-width: 300px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  gap: 10px;
  border-radius: 5px;

  p {
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    white-space: nowrap;

    &.state,
    &.country {
      font-weight: 600;

      &.country {
        letter-spacing: 2px;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    min-width: 250px;
  }
`;

export default function Location({ location }: Props) {
  const { updateStatesAndCurrentLocation } = useWeatherContext();

  return (
    <StyledLocation
      onClick={() => updateStatesAndCurrentLocation(location.lon, location.lat)}
      title={`look up ${location.state}`}
    >
      <div className="div">
        <p className="state">{location.state}</p>
        <p>{location.name}</p>
      </div>
      <p className="country">{location.country}</p>
    </StyledLocation>
  );
}
