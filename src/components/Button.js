import React from "react"
import styled from "styled-components"

const Button = ({ text }) => {
  return <ButtonContainer>{text}</ButtonContainer>
}

const ButtonContainer = styled.button`
  text-transform: uppercase;
  color: var(--color-white);
  width: 15rem;
  height: 5rem;
  border-radius: 30px;
  background-color: var(--color-primary);
  border: none;
  font-size: var(--fs-md);
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  margin: 2rem;
  &:hover {
    filter: brightness(1.1);
  }
  @media (max-width: 700px) {
    width: 90%;

`
export default Button
