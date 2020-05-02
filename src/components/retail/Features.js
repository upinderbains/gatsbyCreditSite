import React from "react"
import Title from "../Title"
import Feature from "../Feature"
import styled from "styled-components"

const Container = styled.section`
  grid-column: center-start/center-end;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0rem;
`
const Features = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, featureList } = frontmatter
  return (
    <Container>
      <Title title={title} />
      <Feature list={featureList} />
    </Container>
  )
}

export default Features
