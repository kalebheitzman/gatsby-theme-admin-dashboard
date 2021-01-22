// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"

export const List = ({ children }) => {

  return(
    <StyledList>{children}</StyledList>
  )
}

export const ListItem = ({ children }) => {
  return (
    <StyledListItem>{children}</StyledListItem>
  )
}

// styled list component
const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

// styled list item component
const StyledListItem = styled.li`
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 0;
`