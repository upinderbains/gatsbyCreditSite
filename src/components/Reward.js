import React, { useState } from "react"
import styled from "styled-components"
import exampleImage from "../tour-images/tour-9.jpeg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  margin-right: 5rem;
  @media (max-width: 900px) {
    width: 250px;
    height: 250px;
    margin-bottom: 5rem;
  }
`
const StyledPoint = styled.ul`
  list-style: disc;
  width: 30rem;
  h2 {
    font-size: var(--fs-lg);
    margin-bottom: 1rem;
  }
`

const StyledPointItem = styled.li`
  font-size: var(--fs-lg);
  margin-left: 1.4rem;
`
const StyledList = styled.ul`
  display: flex;
  margin-bottom: 5rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledListItem = styled.li`
  font-size: var(--fs-lg);
  margin: 1rem 2rem;
  cursor: pointer;
  display: inline-block;
  padding: 1rem;
  text-align: center;
  border-radius: 2px;
  border-bottom: ${props =>
    props.active ? "3px solid var(--color-primary)" : "3px solid transparent"};
  transition: border 0.4s;
`

const StyledSingleReward = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Reward = ({ list }) => {
  const [state, setstate] = useState(0)
  const toggleComponent = index => setstate(index)
  return (
    <Container>
      <StyledList>
        {list.map((i, index) => {
          return (
            <StyledListItem
              onClick={() => toggleComponent(index)}
              key={index}
              active={state === index ? "active" : ""}
            >
              {i.item}
            </StyledListItem>
          )
        })}
      </StyledList>
      <StyledSingleReward>
        <StyledImage src={exampleImage} alt="" />
        <StyledPoint>
          <h2>{list[state].subtitle}</h2>
          {list[state].points.map((list, index) => {
            return <StyledPointItem key={index}>{list}</StyledPointItem>
          })}
        </StyledPoint>
      </StyledSingleReward>
    </Container>
  )
}

export default Reward
