// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

// types
type Children = {
  children: any
}

export const Wrapper = ({ children }: Children) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Wrapper

// StyledWrapper component
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid var(--border-color);
  overflow-y: scroll;
  height: 100%;
  grid-template-areas:
    "content"
    "sidebar";

  ${mq("tablet_side")} {
    grid-template-areas: "sidebar content";
    grid-template-columns: var(--sidebar-width) 1fr;
  }
`
