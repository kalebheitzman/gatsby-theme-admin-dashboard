// import libs
import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

// import components
import Context from "./Context"
import GlobalStyles from "./GlobalStyles"
import Seo from "./Seo"
import Toggle from "./Toggle"
import Logo from "./Logo"
import Topbar from "./Topbar"
import Navigation from "./Navigation"
import Footer from "./Footer"

// import styles
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@fontsource/work-sans"
import "@fontsource/quattrocento-sans"
import styled from "@emotion/styled"
import mq from "../utils/media"

// fontawesome config
config.autoAddCss = false
library.add(fas)

export const Layout = ({ children, title }) => {
  const { toggle, navigation } = useContext(Context)

  // static query for logo data
  const { site: { siteMetadata } } = useStaticQuery(graphql`
  query SiteQuery {
    site {
      siteMetadata {
        description
        title
        siteUrl
      }
    }      
  }
  `)

  return (
    <StyledLayout className={toggle ? "toggled" : "untoggled"}>
      <Seo title={title} siteMetadata={siteMetadata} />
      <GlobalStyles />
      <Toggle />
      <Logo siteMetadata={siteMetadata} />
      <Topbar />
      <Navigation navigation={navigation} />
      <Main>{children}</Main>
      <Footer siteMetadata={siteMetadata} />
    </StyledLayout>
  )
}

export default Layout

// StyledLayout component
const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "logo       logo       topbar"
    "main       main       main"
    "sidebar    sidebar    sidebar"
    "footer     footer     footer"
    "navigation navigation toggle";
  grid-template-columns: 80px 1fr 90px;
  grid-template-rows: 80px 1fr 0 80px 80px;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  max-height: 100vh;
  max-height: -webkit-fill-available;
  width: 100vw;

  &.toggled {
    grid-template-rows: 80px 1fr 1fr 80px;
  }

  ${mq("tablet_up")} {
    grid-template-areas:
      "toggle     logo    topbar"
      "navigation main    main"
      "navigation footer  footer";
    grid-template-columns: 100px var(--sidebar-width) 1fr;
    grid-template-rows: 80px 1fr 80px;
  }
`

// main component
export const Main = styled.main`
  grid-area: main;
  background: var(--content-background);
  height: calc(100vh - 160px);
  overflow: hidden;

  ${mq("tablet_up")} {
    height: fill-available;
    height: 100%;
  }
`
