import { StyledProps } from "@/types";
import styled from "@emotion/styled";

const StyledMidSection = styled.div<StyledProps>`
  min-height: var(--min-app-height);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 30%;
  justify-content: space-between;
  align-items: flex-start;

  .display_section {
    background: linear-gradient(to bottom, #00000070, #00000070, #00000070),
      url(${({ url }) => url});
    box-shadow: 0 0 10px #1d2432;
    background-position: center;
    background-size: cover;
    position: relative;
    padding: 10px;
    width: 100%;
    height: calc(100% - 15px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
  }

  @media only screen and (max-width: 950px) {
    grid-template-rows: unset;
  }
`

export default StyledMidSection;
