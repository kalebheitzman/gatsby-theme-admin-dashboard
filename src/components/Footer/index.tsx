// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"
import mq from "../../utils/media"

// type
type FooterProps = {
siteMetadata: {
        title: string,
        description: string,
        url: string  
    }
}
  
export const Footer = ({ siteMetadata }: FooterProps) => {

    return(
        <StyledFooter>
            <p>&copy; {(new Date().getFullYear())} {siteMetadata.title}.</p>
        </StyledFooter>
    )
}

export default Footer

// styled footer component
const StyledFooter = styled.footer`
    grid-area: footer;
    padding: 0 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        margin: 0;
    }

    ${mq('tablet_up')} {
        padding: 0 2rem;
    }
`