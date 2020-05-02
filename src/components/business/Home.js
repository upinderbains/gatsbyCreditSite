import React from "react"
import styled from "styled-components"
import Hero from "../Hero"
import Title from "../Title"
import Button from "../Button"

const Content = styled.div`
  grid-column: full-start/full-end;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 5rem;
`
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
