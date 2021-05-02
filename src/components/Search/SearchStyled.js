import styled from "styled-components";

const SearchStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;

  & fieldset {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    & label {
      max-width: 49%;
      & input {
        display: inline-block;
        margin-top: 0.5rem;
      }
    }
  }
`;

export default SearchStyled;
