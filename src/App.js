import React from "react";
import { AppStyled, GlobalStyle } from "./AppStyled.js";
import Search from "./components/Search/Search.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <h1>Wikipedia Search</h1>
        <Search />
      </AppStyled>
    </>
  );
}

export default App;
