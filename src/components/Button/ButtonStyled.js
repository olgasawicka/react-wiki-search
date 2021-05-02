import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 150px;
  height: auto;
  padding: 0.5rem 1rem;
  background-color: var(--dark);
  color: var(--light);
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 2px;
  outline: 1px solid transparent;
  cursor: pointer;
  &:hover:not([disabled]) {
    color: var(--dark);
    background-color: var(--blue);
    border: 1px solid var(--dark);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: initial;
  }
`;

export default ButtonStyled;
