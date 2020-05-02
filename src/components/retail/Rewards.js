import React from "react"
import styled from "styled-components"
import Title from "../Title"
import Reward from "../Reward"

const Container = styled.section`
  grid-column: center-start/center-end;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0rem;
`

const Rewards = ({ data }) => {
  const { frontmatter } = data[0].node
  const { title, rewardsList } = frontmatter

  return (
    <Container>
      <Title title={title} />
      <Reward list={rewardsList} />
    </Container>
  )
}

export default Rewards
