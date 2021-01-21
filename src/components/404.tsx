// import libs
import React from "react"

// import components
import Layout from "./Layout"
import WideWrapper from "./WideWrapper"

export const ErrorPage = () => {

  return(
    <Layout
      title="404"
    >
      <WideWrapper>
        <h1>404 Page Not Found</h1>
      </WideWrapper>
    </Layout>
  )
}

export default ErrorPage

// error page component
// const Error = styled.div`

// `