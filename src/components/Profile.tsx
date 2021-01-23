// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"

// types
type ProfileProps = {
    user: any
}

const Profile = ({ user }: ProfileProps) => {

  const {
    name,
    picture
  } = user

  return(
    <StyledProfile>
      <Name>{name}</Name>
      <Avatar><img src={picture} /></Avatar>
    </StyledProfile>
  )
}

export default Profile

// styled profile component
const StyledProfile = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-gap: 1rem;
  margin-left: 1rem;
`

// name component
const Name = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--logo-color);
`

// avatar component
const Avatar = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 40px; 
    margin-bottom: 0; 
    border: 1px solid var(--logo-color);
  }
`