import { useWeatherContext } from "@/context/store";
import styled from "@emotion/styled";
import React from "react";

type Props = { location: any };
const StyledLocation = styled.div`
  background-color: #feba49;
  color: #292148;
  height: fit-content;
  width: fit-content;
  min-width: min(300px, 97vw);
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
    }
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
    <StyledLocation onClick={() => getWeather(location.lon, location.lat)}>
      <div className="div">
        <p className="state">{location.state}</p>
        <p>{location.name}</p>
      </div>
      <p className="country">{location.country}</p>
    </StyledLocation>
  );
}
