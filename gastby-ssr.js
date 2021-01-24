
// import libs
import React from "react"
import Provider from "./src/components/Provider"
import { HelmetProvider } from "react-helmet-async"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <HelmetProvider>{element}</HelmetProvider>
    </Provider>
  )
}
