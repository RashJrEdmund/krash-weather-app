import styled from "@emotion/styled";

const StyledSideBar = styled.div`
  background-color: transparent;
  color: var(--app-gold);
  width: 100%;
  height: 100%;
  max-height: calc(90vh + 20px);

  & > h3 {
    color: var(--app-gold);
  }

  @media only screen and (max-width: 950px) {
    height: 100vh;
    max-height: none;
    padding: 10px;
  }
`;

export default StyledSideBar;
