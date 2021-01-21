// import libs
import React from "react"

// import components
import { Helmet } from "react-helmet-async"

export default ({ title, siteMetadata }) => {

  if (!title || !siteMetadata) {
    return <></>
  }
  
  return (
    <Helmet>
      <title>{title} | {siteMetadata.title}</title>
    </Helmet>
  )
}
