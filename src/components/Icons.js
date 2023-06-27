"use client";

import styled from "@emotion/styled";

import { LuSearch } from "react-icons/lu";
import { MdLocationOn, MdMenu } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const SearchIcon = styled(LuSearch)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 5px;
  color: #000;
  font-size: 20px;
`;

export const LocationIcon = styled(MdLocationOn)`
  color: #000;
  font-size: 20px;
`;

export const MenuIcon = styled(MdMenu)`
  color: #000;
  font-size: 20px;
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  color: #000;
  font-size: 20px;
`;
