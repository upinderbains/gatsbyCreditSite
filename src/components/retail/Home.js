import React from "react"
import styled from "styled-components"
import Hero from "../Hero"
import Title from "../Title"
import Button from "../Button"

const Content = styled.div`
  grid-column: center-start/center-end;
  background-color: red;

  @media (max-width: 700px) {
  }
`
const Container = styled.div``
const Home = ({ data }) => {
  const { frontmatter, excerpt } = data[0].node
  const { title, subtitle, buttonText, image } = frontmatter
  return (
    <Content>
      <Container>
        <Title title={title} subtitle={subtitle} text={excerpt}></Title>
        <Button text={buttonText}></Button>
      </Container>
      <Hero img={image.childImageSharp.fluid}></Hero>
    </Content>
  )
}

export default Home
