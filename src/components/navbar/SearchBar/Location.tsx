import { useWeatherContext } from "@/context/store";
import styled from "@emotion/styled";
import React from "react";

type Props = { location: any };

const StyledLocation = styled.div`
  /* background: linear-gradient(to bottom, #feba4637, #feba4637, #feba4637); */
  background: linear-gradient(to bottom, #1d2432e4, #1d2432e4, #1d2432e4);
  box-shadow: -5px 5px 10px #1d2432;
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

// const obj = {
//   country: "CM",
//   lat: 6.2108889,
//   local_names: { fr: "Kumbo", ru: "Кумбо" },
//   lon: 10.6867788,
//   name: "Kumbo",
//   state: "Northwest",
// };

export default function Location({ location }: Props) {
  const { getWeather } = useWeatherContext();

  return (
    <StyledLocation
      onClick={() => getWeather(location.lon, location.lat)}
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
