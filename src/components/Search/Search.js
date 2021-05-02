import React, { useState, useEffect } from "react";
import debounce from "../../utils/debounce";
import Button from "../Button/Button";
import SearchList from "../SearchList/SearchList";
import SearchStyled from "./SearchStyled";

const Search = () => {
  const [phrase, setPhrase] = useState("");
  const [replaceTxt, setReplaceTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const btnDisabled = !replaceTxt || (data && !data.length);

  useEffect(() => {
    phrase && debounce(fetchData(), 100);
  }, [phrase]);

  const fetchData = async () => {
    setLoading(true);
    setData(null);
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=10&origin=*&srsearch=${phrase}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data.query.search);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const replaceOne = () => {
    const re = new RegExp(phrase, "i");
    const findIndexOfOne = data.indexOf(
      data.find((obj) =>
        obj.snippet.toLowerCase().includes(phrase.toLowerCase())
      )
    );
    const newData = data.map((obj, index) => {
      if (findIndexOfOne === index) {
        const newSnippet = obj.snippet.replace(re, replaceTxt, 1);
        return {
          ...obj,
          snippet: newSnippet,
        };
      }
      return obj;
    });
    setData(newData);
  };

  const replaceAll = () => {
    const re = new RegExp(phrase, "gi");
    const newData = data.map((obj) => {
      if (obj.snippet.toLowerCase().includes(phrase.toLowerCase())) {
        const newSnippet = obj.snippet.replace(re, replaceTxt);
        return {
          ...obj,
          snippet: newSnippet,
        };
      }
      return obj;
    });
    setData(newData);
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
                onChange={(e) => setPhrase(e.target.value)}
              />
            </label>
            <label>
              Replace with
              <input
                type="text"
                value={replaceTxt}
                onChange={(e) => setReplaceTxt(e.target.value)}
              />
            </label>
          </fieldset>
          <fieldset>
            <Button type="button" onClick={fetchData} disabled={!phrase}>
              search
            </Button>
            <Button type="button" onClick={replaceOne} disabled={btnDisabled}>
              replace
            </Button>
            <Button type="button" onClick={replaceAll} disabled={btnDisabled}>
              replace all
            </Button>
          </fieldset>
        </form>
      </SearchStyled>
      <SearchList data={data} loading={loading} phrase={phrase} />
    </>
  );
};

export default Search;
