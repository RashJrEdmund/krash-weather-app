import { useWeatherContext } from "@/context/store";
import { DAYS } from "@/services/constants";
import styled from "@emotion/styled";
import React, { useEffect } from "react";

const StyledDate_Time = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 10px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: #f5f5f5;

  .day {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 10px;
  }

  .hour {
    font-size: 15px;
    font-weight: 400;
  }
`;

type Props = {};

export default function Date_Time({}: Props) {
  const { day, time, setDay } = useWeatherContext();

  useEffect(() => {
    // get right day
  }, [time]);

  return (
    <StyledDate_Time>
      <span className="day">{day}</span>
      <span className="hour">{time}</span>
    </StyledDate_Time>
  );
}
