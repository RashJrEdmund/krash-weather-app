"use client";

import React from "react";
import StyledSubSide from "./StyledSubSide";
import {
  BackIcon,
  NewsIcon,
  SettingsIcon,
  UserIcon,
} from "@/components/atoms/Icons";
import { useWeatherContext } from "@/context/store";

interface Props { setIndexSide: any };

export default function UserSidebar({ setIndexSide }: Props) {
  const {
    customAlert: { displayAlert },
  } = useWeatherContext();

  return (
    <StyledSubSide>
      <h4 title="back" onClick={() => setIndexSide((prev: any) => !prev)}>
        <BackIcon /> Back
      </h4>

      <ul>
        <li title="news" onClick={() => displayAlert("This feature is not yet available")}>
          <NewsIcon /> News
        </li>
        <li title="profile" onClick={() => displayAlert("This feature is not yet available")}>
          <UserIcon /> Profile
        </li> 
        <li title="settings" onClick={() => displayAlert("This feature is not yet available")}>
          <SettingsIcon /> Settings
        </li>
      </ul>
    </StyledSubSide>
  );
}
