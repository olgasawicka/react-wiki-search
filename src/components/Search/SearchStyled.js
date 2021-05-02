import styled from "styled-components";

const SearchStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;

  & fieldset {
    display: flex;
    flex-direction: column;
    & input {
      display: inline-block;
      margin-top: 0.5rem;
    }

    & button {
      display: inline-block;
      width: auto;
      border: 1px solid transparent;
      outline: 1px solid transparent;
      background-color: black;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      padding: 1rem 2rem;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #360536;
      }
    }
  }
`;

export default SearchStyled;
