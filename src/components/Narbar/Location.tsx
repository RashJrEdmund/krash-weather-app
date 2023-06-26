import styled from "@emotion/styled";
import React from "react";

type Props = { location: any };
const StyledLocation = styled.div`
  background-color: #feba49;
  color: #292148;
  height: fit-content;
  width: fit-content;
  width: min(300px, 97vw);
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;

const obj = {
  country: "CM",
  lat: 6.2108889,
  local_names: { fr: "Kumbo", ru: "Кумбо" },
  lon: 10.6867788,
  name: "Kumbo",
  state: "Northwest",
};

export default function Location({ location }: Props) {
  const getWeather = () => {
    console.log("getting data for", location.name, location.country);
  };

  return (
    <StyledLocation onClick={getWeather}>
      <p>{location.name}</p>
      <p>{location.country}</p>
      <p>{location.state}</p>
    </StyledLocation>
  );
}
