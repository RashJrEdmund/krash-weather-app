import styled from "@emotion/styled";
import StyledSideBar from "../StyledSidBar";

const StyledLeftSide = styled(StyledSideBar)`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 10px 0 0;
    height: 75vh;
    overflow: auto;

    ::-webkit-scrollbar {
      display: none
    }

    li {
      width: 100%;
      color: #ddd;
      margin: 17px 0 0;
      cursor: pointer;
      border-top: 1px solid #808080;
      transition: 300ms;

      &:hover {
        background: linear-gradient(to right, transparent, #00800005, grey);
        border-radius: 0 6px 6px 0;
      }

      &.current_time {
        background: linear-gradient(to right, transparent, #00800005, 00800005);
        border-radius: 0 6px 6px 0;
      }

      h4 {
        font-weight: 19px;
      }

      p {
        margin: 9px 0 0;
      }

      span {
        color: green;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    ul {
      border-top: 1px solid #ddd;
      height: 90vh;
      overflow: auto;
      padding: 0 0 50px;
      margin: 10px 0 0;

      li {
        &:hover {
          border-right: 1px solid #008000;
          background: linear-gradient(to right, transparent, #00800005, green);
        }
      }
    }
  }
`;

export default StyledLeftSide;
