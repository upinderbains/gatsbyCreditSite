import React from "react"
import styled from "styled-components"
import Hero from "./Hero"
import Title from "./Title"
import Button from "./Button"

const Content = styled.div`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: 1fr repeat(2, minmax(30rem, 1fr)) minmax(500px, 1fr);

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`
const GridContent = styled.div`
  grid-column: 2 / 4;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  @media (max-width: 1000px) {
    align-items: flex-start;
  }

`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 480px;
  max-width: 60vw;
  z-index: 10;
  margin-left: 2rem;
  padding: 4rem 1rem; 
`
const ImageContainer = styled.div`
  grid-column: 3 / -1;
  grid-row: 1;
  width: 100%;
  height: 100%;
`

const Landing = ({ dataFront, dataText }) => {
  const { title, subtitle, buttonText, image } = dataFront

  return (
    <Content>
      <GridContent>
        <Container>
          <Title title={title} subtitle={subtitle} text={dataText}></Title>
          <Button text={buttonText}></Button>
        </Container>
      </GridContent>

      <ImageContainer>
        <Hero img={image.childImageSharp.fluid}></Hero>
      </ImageContainer>
    </Content>
  )
}

export default Landing
