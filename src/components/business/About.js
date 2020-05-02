import React from "react"
import Title from "../Title"
import styled from "styled-components"

const Container = styled.section`
  grid-column: center-start/center-end;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0rem;
`
const About = ({ data }) => {
  const { frontmatter, excerpt } = data[0].node
  const { title, image } = frontmatter
  return (
    <Container>
      <Title title={title} text={excerpt}></Title>
    </Container>
  )
}

export default About
