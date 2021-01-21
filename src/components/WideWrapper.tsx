// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

// types
type Children = {
  children: any
}

export const WideWrapper = ({ children }: Children) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default WideWrapper

// wrapper component
const StyledWrapper = styled.div`
  height: calc(100vh - 160px);
  overflow-y: scroll;
  padding: 1rem;
  position: relative;

  ${mq("tablet_up")} {
    height: calc(100vh - 80px);
    padding: 2rem;
  }
`
