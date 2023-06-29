import styled from "@emotion/styled";
import StyledSideBar from "../StyledSidBar";

const StyledLeftSide = styled(StyledSideBar)`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    li {
      width: 100%;
      color: #ddd;
      margin: 17px 0 0;
      cursor: pointer;

      h4 {
        font-weight: 19px;
      }

      p {
        margin: 2px 0 0;
      }

      span {
        color: green;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    ul {
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
