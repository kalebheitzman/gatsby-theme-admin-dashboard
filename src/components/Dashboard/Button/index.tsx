// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"

export default ({ url, children }) => {
  return <Button href={url}>{children}</Button>
}

// button component
const Button = styled.a`
  background: var(--button-background);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 85ms ease-out;

  &:hover {
    background: var(--logo-background);
    color: var(--logo-color);
    text-decoration: none;
  }
`
