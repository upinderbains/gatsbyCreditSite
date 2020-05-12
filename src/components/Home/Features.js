import React from "react"
import Title from "../Title"
import Feature from "../Feature"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.section`
  grid-column: center-start/center-end;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  padding: 5rem 0rem;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledImage = styled.div`
  transform: translateX(-150px) rotate(45deg);
  div {
    border-radius: 10px;
  }
  @media (max-width: 1000px) {
    transform: translateX(0px) rotate(0deg);
  }
`
const StyledContent = styled.div`
`
const Features = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, featureList, image } = frontmatter

  return (
    <Container>
      <StyledImage>
        <Img fixed={image.childImageSharp.fixed} />
      </StyledImage>
      <StyledContent>
        <Title title={title} />
        <Feature list={featureList} />
      </StyledContent>
    </Container>
  )
}

export default Features
