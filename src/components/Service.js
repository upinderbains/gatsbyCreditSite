import React from "react"
import Title from "./Title"
import styled from "styled-components"
import tourImage from "../tour-images/tour-10.jpeg"

const ServiceContainer = styled.section`
  grid-column: center-start/center-end;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  padding: 5rem 0rem;
  margin-bottom: 5rem;
`
const ServiceItem = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-primary);
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const StyledImage =  styled.img`
    width: 100%;
    max-width: 400px;
    height: 400px;
    border-radius: 10px;
    transform: translateY(${props => (props.down ? "50px" : "-50px")});
    @media (max-width: 900px) {
      margin: ${props => (props.down ? "0px" : "50px 0px")};
    }
  `


const Service = ({ list }) => {
  return (
    <ServiceContainer>
      {list.map((item, index) => {
        return (
          <ServiceItem key={index} reverse={index === 0 ? true : false}>
            <Title title={item.subtitle} text={item.text} />
            <StyledImage flip src={tourImage} alt="" />
          </ServiceItem>
        )
      })}
    </ServiceContainer>
  )
}

export default Service
