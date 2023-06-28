"use client";

import styled from "@emotion/styled";

import { LuSearch } from "react-icons/lu";
import { MdLocationOn, MdMenu } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BiNews, BiSolidExit } from "react-icons/bi";

export const SearchIcon = styled(LuSearch)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 5px;
  color: #feba49;
  font-size: 20px;
`;

export const LocationIcon = styled(MdLocationOn)`
  color: #ffba51;
  font-size: 20px;
`;

export const MenuIcon = styled(MdMenu)`
  color: #ffba51;
  font-size: 40px;
  cursor: pointer;

  @media only screen and (min-width: 950px) {
    display: none;
  }
`;

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  color: #000;
  font-size: 20px;
`;

export const SettingsIcon = styled(IoMdSettings)`
  color: #ffba51;
  font-size: 20px;
`;

export const UserIcon = styled(FaUser)`
  color: #ffba51;
  font-size: 20px;
`;

export const NewsIcon = styled(BiNews)`
  color: #ffba51;
  font-size: 20px;
`;

export const BackIcon = styled(BiSolidExit)`
  color: #ffba51;
  font-size: 20px;
  transform: rotate(180deg);
`;
