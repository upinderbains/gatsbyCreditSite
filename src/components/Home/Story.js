import React from "react"
import styled from "styled-components"
import Button from "../Button"
import storyImage_1 from "../../tour-images/tour-1.jpeg"
import storyImage_2 from "../../tour-images/tour-2.jpeg"

const Content = styled.div`
  background-color: var(--color-grey-light-1);
  grid-column: col-start 6 / full-end;
  display: flex;
  padding: 6rem 12rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h2 {
    font-size: var(--fs-h2);
    color: var(--color-grey-dark-1);
    line-height: 1;
    margin-bottom: 3rem;
  }
  h3 {
    font-size: var(--fs-md);
    color: var(--color-primary);
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 1000px) {
    grid-column: full-start / full-end;
  }
`
const Picture = styled.div`
  background-color: var(--color-primary);
  grid-column: full-start / col-end 5;
  background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  @media (max-width: 1000px) {
    grid-column: full-start / full-end;
  }
`
const Image1 = styled.img`
    width: 100%;
    grid-row: 2/6;
    z-index: 40;
    grid-column: 2/6;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
  }
`
const Image2 = styled.img`
    width: 115%;
    z-index: 60;
    grid-row: 4/6;
    grid-column: 4/7;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
  }
  `

const Story = () => {
  return (
    <>
      <Picture>
        <Image1 src={storyImage_1}></Image1>
        <Image2 src={storyImage_2}></Image2>
      </Picture>
      <Content>
        <h3>Happy Customers</h3>
        <h2>The best decision of our lives</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          voluptatibus. Consequatur nihil aliquam cum pariatur.
        </p>
        <Button text={"Find Your Own Home"} />
      </Content>
    </>
  )
}

export default Story
