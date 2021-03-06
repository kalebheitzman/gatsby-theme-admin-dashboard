// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

// types
type Children = {
  children: any
}

export default ({ children }: Children) => {
  return <Content>{children}</Content>
}

// content component
const Content = styled.div`
  grid-area: content;
  padding: 1rem;

  ${mq("tablet_up")} {
    padding: 0;
  }

  ${mq("tablet_side")} {
    overflow-y: scroll;
    height: fill-available;
    height: 100%;
    border-right: 1px solid var(--border-color);
  }
`
