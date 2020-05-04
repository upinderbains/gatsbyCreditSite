import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, text }) => {
  return (
    <TitleWrapper
      data-sal="slide-right"
      data-sal-delay="3000"
      data-sal-easing="ease-out-back"
    >
      <h2>
        {title}
        <TitleSpan>{subtitle}</TitleSpan>
        <TextSpan>{text}</TextSpan>
      </h2>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  font-size: var(--fs-h2);
  display: flex;
  flex-direction: column;
  max-width: 750px;
  

  h2 {
    display: inline-block;
    font-weight: 400;
    color: var(--color-secondary);
    line-height: 1;
    margin-bottom: 2rem;
  }
`

const TextSpan = styled.span`
  font-size: var(--fs-xl);
  width: 100%;
  display: inline-block;
  color: var(--color-secondary);
  margin-top: 3rem;
`

const TitleSpan = styled.span`
  margin-left: 0.3em;
  color: var(--color-primary);
`

export default Title
