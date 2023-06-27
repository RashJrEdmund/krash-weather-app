"use client";
import styled from "@emotion/styled";

import { StyledProps } from "@/types";

export const Styledoverlay = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #1d243264, #1d243264, #1d243264);
  z-index: ${({ index = 2 }) => index};
`;

// Overlay is functional component

export const Overlay = ({
  action,
  index,
}: {
  action: () => any;
  index: number | undefined;
}) => {
  return <Styledoverlay index={index} onClick={() => action()} />;
};
