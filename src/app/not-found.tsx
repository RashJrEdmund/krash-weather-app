'use client';

import Link from "next/link";

import styled from "@emotion/styled";

const StyledLoading = styled.div`
  align-self: start;
  /* background-color: var(--side-bg); */
  color: var(--app-gold);
  width: 98vw;
  height: fit-content;
  min-height: 90vh;

  a {
    background-color: var(--side-bg);
    color: var(--app-gold);;
    font-weight: 600;
    font-size: 1.3rem;
    padding: 2px 10px;
    border-radius: 5px;
  }
`;


export default function NotFound() {
  return (
    <StyledLoading>
      <h1 className="krash_text">Krash weather</h1>

      <div>
        page not found return to app <Link href='/' replace>App</Link>
      </div>
    </StyledLoading>
  )
}