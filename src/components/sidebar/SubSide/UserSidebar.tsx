"use client";

import React from "react";
import StyledSubSide from "./StyledSubSide";
import {
  BackIcon,
  NewsIcon,
  SettingsIcon,
  UserIcon,
} from "@/components/atoms/Icons";

type Props = { setIndexSide: any };

export default function UserSidebar({ setIndexSide }: Props) {
  return (
    <StyledSubSide>
      <h4 title="back" onClick={() => setIndexSide((prev: any) => !prev)}>
        <BackIcon /> User
      </h4>

      <ul>
        <li title="news">
          <NewsIcon /> News
        </li>
        <li title="profile">
          <UserIcon /> Profile
        </li>
        <li title="settings">
          <SettingsIcon /> Settings
        </li>
      </ul>
    </StyledSubSide>
  );
}
