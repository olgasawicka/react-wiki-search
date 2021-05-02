import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchList from "../SearchList/SearchList";
import SearchStyled from "./SearchStyled";

const Search = () => {
  const [phrase, setPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    phrase && fetchData();
  }, [phrase]);

  const fetchData = async () => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=10&origin=*&srsearch=${phrase}`;

    setLoading(true);
    const response = await axios.get(url);
    setData(response.data.query.search);
    setLoading(false);
  };

  const onSearchInput = (e) => {
    setPhrase(e.target.value);
  };

  return (
    <>
      <SearchStyled>
        <form onSubmit={fetchData}>
          <fieldset>
            <label>
              Search phrase
              <input
                type="text"
                value={phrase}
                onChange={(e) => onSearchInput(e)}
              />
            </label>
            <button type="submit" onClick={fetchData}>
              Search
            </button>
          </fieldset>
        </form>
      </SearchStyled>
      <SearchList data={data} loading={loading} phrase={phrase} />
    </>
  );
};

export default Search;
