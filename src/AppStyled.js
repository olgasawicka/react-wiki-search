import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  --dark: #000;
  --light: #fff;
  --lightgrey: #e7e7e7;
  --blue: #00b7ff;
}

  * {
    box-sizing: border-box;
    margin: 0;
	  padding: 0;
	  border: 0;
  }

  html {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input[type=text] {
    width: 100%;
    max-width: 500px;
    padding:0.5rem 1rem;
    border: 1px solid black;
  }
`;

const AppStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;

  & h1 {
    margin-bottom: 2rem;
  }
`;

export { GlobalStyle, AppStyled };
