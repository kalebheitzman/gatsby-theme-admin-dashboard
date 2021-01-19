/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import libs
import React from "react"
import Provider from "./src/components/Context/Provider"
import { HelmetProvider } from "react-helmet-async"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <HelmetProvider>{element}</HelmetProvider>
    </Provider>
  )
}
