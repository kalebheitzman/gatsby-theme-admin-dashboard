// import libs
import React from "react"

// import components
import { Link } from "gatsby"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

// type
type LogoProps = {
  siteMetadata: {
    title: string,
    description: string,
    url: string  
  }
}

export default ({ siteMetadata }: LogoProps) => {
  return (
    <Logo>
      <h1>
        <Link to="/">
          <span>{siteMetadata.title}</span>
        </Link>
      </h1>
    </Logo>
  )
}

// logo component
const Logo = styled.div`
  grid-area: logo;

  background: var(--logo-background);
  color: var(--logo-color);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 80px;

  h1 {
    margin: 0;
    padding: 0;
    color: var(--logo-color);
    line-height: 1;
    font-size: 1.65rem;

    a {
      text-decoration: none;
      color: var(--logo-color);
    }
  }

  ${mq("tablet_up")} {
    padding: 0 2rem;
  }
`
