// import libs
import React from "react"
import { useAuth, AuthService } from "gatsby-theme-auth0"

// import components
import Profile from "./Profile"

// import styles
import styled from "@emotion/styled"

const User = () => {
  const { isLoggedIn, profile } = useAuth()

  console.log(profile)

  return(
    <StyledUser>
      {isLoggedIn ? (
        <button onClick={AuthService.logout}>Logout</button>
      ) : (
        <button onClick={AuthService.login}>Login</button>
      )}
      {isLoggedIn && profile && <Profile user={profile} />}
    </StyledUser>
  )
}

export default User

// styled user
const StyledUser = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  button {
    background: var(--logo-hover);
    border: none;
    border-radius: 1rem;
    padding: 1px 0.75rem;
    outline: none;
    cursor: pointer;
    color: var(--logo-color)
  }
`