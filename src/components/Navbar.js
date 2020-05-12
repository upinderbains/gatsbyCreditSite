import React, { useState, useMemo } from "react"
import styled from "styled-components"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import navLinks from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Container = styled.nav`
  grid-column: full-start/full-end;
  width: 100%;
  position: fixed;
  top: 0;
  background: var(--color-secondary);
  color: var(--color-primary);
  right: 0;
  left: 0;
  z-index: 1030;
  visibility: ${props => (props.show ? "visible" : "hidden")};
  transition: all 200ms ${props => (props.show ? "ease-in" : "ease-out")};
  transform: ${props => (props.show ? "none" : "translate(0, -100%)")};
`
const NavCenter = styled.div`
  padding: 1rem 5rem;
  @media (min-width: 700px) {
    max-width: 1170px;
    margin-left: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const NavList = styled.ul`
  list-style-type: none;
  height: ${props => (props.isOpen ? `200px` : `0px`)};
  overflow: hidden;
  transition: all 0.3s;

  
  }

  @media screen and (min-width: 700px) {
    height: auto;
    display: flex;
  }
`
const NavItem = styled.li`
  display: flex;
  width: 100%;
  font-size: var(--fs-lg);
  & a {
    display: block;
    margin: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-grey-light-1);
    transition: all 0.5s;
    &:hover {
      color: var(--primary-dark);
    }
    @media screen and (min-width: 700px) {
      display: flex;
    }
  }
`
const HamburgerContainer = styled.div`
  background-color: transparent;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  self-align: flex-start;
  margin-left: auto;
  @media screen and (min-width: 700px) {
    display: none;
  }
`

const Hamburger = styled.div`
  position: relative;
  margin-top: 2.3rem;
  background-color: ${props =>
    props.isOpen ? `transparent` : `var(--color-primary-dark)`};

  &,
  &:before,
  &:after {
    width: 2.8rem;
    height: 2px;
    display: inline-block;
    transition: all 0.2s;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    background-color: var(--color-primary-dark);
  }
  &:before {
    top: ${props => (props.isOpen ? `0` : `-0.8rem`)};
    transform: rotate(${props => (props.isOpen ? `135deg` : `0`)});
  }
  &:after {
    top: ${props => (props.isOpen ? `0` : `0.8rem`)};
    transform: rotate(${props => (props.isOpen ? `-135deg` : `0`)});
  }
`

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return useMemo(
    () => (
      <Container show={hideOnScroll}>
        <NavCenter>
          <HamburgerContainer onClick={toggleNav}>
            <Hamburger isOpen={isOpen}></Hamburger>
          </HamburgerContainer>
          <NavList isOpen={isOpen}>
            {navLinks.map((link, index) => {
              return (
                <NavItem key={index}>
                  <AniLink 
                  fade
                    to={link.path}
                    activeStyle={{ color: "var(--color-primary)" }}
                  >
                    {link.text}
                  </AniLink>
                </NavItem>
              )
            })}
          </NavList>
        </NavCenter>
      </Container>
    ),
    [hideOnScroll, isOpen]
  )
}

export default Navbar
