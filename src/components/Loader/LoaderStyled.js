import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyled = styled.div`
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  & .spinner-icon {
    width: 1.25rem;
    height: 1.25rem;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: var(--dark);
    border-left-color: var(--dark);
    border-radius: 50%;
    animation: ${rotate} 400ms linear infinite;
  }
`;

export default LoaderStyled;
