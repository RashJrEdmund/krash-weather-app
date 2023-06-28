"use client";
import styled from "@emotion/styled";

import { StyledProps } from "@/types";

export const Styledoverlay = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1d243264;
  opacity: ${({ opacity = "0.3" }) => opacity};
  z-index: ${({ index = 2 }) => index};
`;

// Overlay is functional component

export const Overlay = ({
  action,
  index,
  opacity,
}: {
  action: () => any;
  index: number | undefined;
  opacity?: string;
}) => {
  return (
    <Styledoverlay index={index} opacity={opacity} onClick={() => action()} />
  );
};
