"use client";

import styled from "@emotion/styled";

const StyledSubSide = styled.div`
  background-color: transparent;
  color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h4 {
    color: #ddd;
    margin: 1.6rem 0 0;
    display: flex;
    gap: 7px;
    align-items: center;
    align-items: flex-start;
    cursor: pointer;

    &.index_h4 {
      cursor: text;
    }
  }

  ul {
    width: 100%;
    padding: 0;
    margin: 1.6rem 0 0;

    li {
      width: 100%;
      height: fit-content;
      background-color: transparent;
      cursor: pointer;
      margin: 1rem 0;
      padding: 10px 0;
      cursor: pointer;
      white-space: nowrap;
      gap: 7px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h3 {
      }
    }
  }

  .user_button {
    width: 100%;
    /* margin: 4rem 0 0; */
    font-size: 19px;
    cursor: pointer;
    white-space: nowrap;
    gap: 7px;
    display: flex;
    align-items: flex-start;
  }

  @media only screen and (max-width: 950px) {
    padding: 10px;

    ul {
      li {
        margin: 10px 0 0;
      }
    }

    .user_button {
      margin: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    ul {
      border-top: 1px solid #ddd;
      height: 70vh;
      overflow: auto;
      padding: 0 0 30px;
      margin: 10px 0 15px;
    }
  }

  @media only screen and (min-width: 768px) {
    ul {
      border-top: 1px solid #ddd;
      height: 70vh;
      overflow: auto;
      padding: 0 0 30px;
      margin: 10px 0 0;

      li:hover {
        border-right: 1px solid #fff;
      }
    }
  }
`;

export default StyledSubSide;
