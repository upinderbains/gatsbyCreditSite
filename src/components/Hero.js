import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ img, className }) => {
  return <BackgroundImage className={className} fluid={img}></BackgroundImage>
}

export default styled(Hero)`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255),  60%, transparent);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
`
