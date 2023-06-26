"use client";

import React from "react";
import StyledSideBar from "../StyledSideBar";

type Props = {};

export default function UserSidebar({}: Props) {
  return (
    <StyledSideBar>
      <h3>User</h3>

      <ul>
        <li>Search Location</li>
        <li>News</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </StyledSideBar>
  );
}
