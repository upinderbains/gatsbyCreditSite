import React from "react"
import styled from "styled-components"
import IconCheck from "../icons/check"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

  grid-gap: 5rem;
  align-items: start;
`

const FeatureItem = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;
  background-color: var(--color-grey-light-1);
  padding: 3rem 5rem;
  border-radius: 8px;

  svg {
    width: 30px;
    height: 30px;
    fill: var(--color-primary);
    grid-row: 1 / span 2;
  }
  p {
    font-size: var(--fs-md);
  }
  h4 {
    color: var(color-grey-dark-1);
  }
`
const Feature = ({ list }) => {
  return (
    <Container>
      {list.map((service, index) => {
        return (
          <FeatureItem key={index}>
            <IconCheck />
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </FeatureItem>
        )
      })}
    </Container>
  )
}

export default Feature
