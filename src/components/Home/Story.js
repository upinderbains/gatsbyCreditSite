import React from "react"
import styled from "styled-components"
import storyImage_1 from "../../tour-images/tour-1.jpeg"
import storyImage_2 from "../../tour-images/tour-2.jpeg"

const Content = styled.div`
  background-color: var(--color-grey-light-1);
  grid-column: col-start 5 / full-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: var(--fs-h2);
    color: var(--color-grey-dark-1);
    line-height: 1;
  }
  h3 {
    font-size: var(--fs-md);
    color: var(--color-primary);
  }
  p {
    font-size: 1.5rem;
  }
`
const Picture = styled.div`
  background-color: var(--color-primary);
  grid-column: full-start / col-end 4;

  display: grid;
  grid-template-row: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  align-items: center;

  img {
    width: 100%;
    box-shadow: 0 2rem 5rem rgba(#000, 0.1);
  }
`
const Image1 = styled.img`
    grid-row: 2/6;
    grid-column: 2/6;
  }
`
const Image2 = styled.img`
    width: 115%;
    grid-row: 4/6;
    grid-column: 4/7;
    z-index: 20;
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
      </Content>
    </>
  )
}

export default Story
