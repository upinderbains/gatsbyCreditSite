import React from "react"
import styled from "styled-components"
import socialLinks from "../constants/socialIcons"
import navLinks from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const StyledFooter = styled.footer`
  grid-column: full-start / full-end;
  background-color: var(--color-secondary);
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
`
const SocialLinks = styled.a`
  padding: 10px;
 
  svg {
    fill: var(--color-grey-light-2);
    width: 25px;
    height: 25px;
    transition: all .3s;

    &:hover,
    &:focus {
      fill: var(--color-primary)
    }
  }
`

const NavLinks = styled.div`
 
 
  a {
    font-size: var(--fs-lg);
    text-decoration: none;
    padding: 1rem;
    text-transform: uppercase;

    color: var(--color-grey-light-1);
    transition: all 0.3s;
    &:hover {
      color: var(--color-primary);
    }
  }
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 5rem;
  width: 100%;
  justify-content: space-between;
`
const StyledCopyright = styled.div`
  font-size: var(--fs-md);
  color: var(--color-grey-light-2);
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <NavLinks>
          {navLinks.map((link, index) => {
            return (
              <AniLink
              fade
                key={index}
                to={link.path}
                activeStyle={{
                  color: "var(--color-primary)",
                }}
              >
                {link.text}
              </AniLink>
            )
          })}
        </NavLinks>
        <div>
          {socialLinks.map((link, index) => {
            return (
              <SocialLinks
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </SocialLinks>
            )
          })}{" "}
        </div>
      </StyledContainer>

      <StyledCopyright>
        <p>&copy; {new Date().getFullYear()} company. All rights reserved.</p>
      </StyledCopyright>
    </StyledFooter>
  )
}

export default Footer
