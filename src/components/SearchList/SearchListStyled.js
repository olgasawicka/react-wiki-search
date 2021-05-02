import styled from "styled-components";

const SearchListStyled = styled.div`
  display: flex;
  padding-top: 3rem;
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & li {
      background-color: var(--lightgrey);
      padding: 2rem;
      width: 100%;
      max-width: 600px;
      margin: 1rem;
      line-height: 1.5;
      border-radius: 5px;
      & h2{
        padding-bottom: 1rem;
      }
      & span.searchmatch {
        background-color: var(--blue);
        padding: 0.125rem;
        font-weight: bold;
      }
    }
  }
  & .no-results {
    font-size: 1.125rem;
    font-weight: bold;
    & span {
      font-style: italic;
      color: var(--blue);
    }
  }
`;

export default SearchListStyled;
