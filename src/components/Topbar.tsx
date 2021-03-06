// import libs
import React from "react"

// import components
import User from "./User"
import DarkMode from "./DarkMode"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

export default () => {
  return (
    <Topbar>
      <DarkMode />
      <User />
    </Topbar>
  )
}

// topbar component
const Topbar = styled.div`
  grid-area: topbar;
  background: var(--logo-background);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "user";

  ${mq("tablet_up")} {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    display: flex;
    justify-content: flex-end;
  }
`
