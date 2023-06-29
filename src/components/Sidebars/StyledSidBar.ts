import styled from "@emotion/styled";

const StyledSideBar = styled.div`
  background-color: transparent;
  color: #ffba51;
  width: 100%;
  height: 100%;
  max-height: calc(90vh + 20px);

  & > h3 {
    color: #ffba51;
  }

  @media only screen and (max-width: 950px) {
    height: 100vh;
    max-height: none;
    padding: 10px;
  }
`;

export default StyledSideBar;
