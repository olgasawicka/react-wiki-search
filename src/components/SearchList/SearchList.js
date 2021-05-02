import React from "react";
import PropTypes from "prop-types";
import SearchListStyled from "./SearchListStyled";
import Loader from "../Loader/Loader";

const SearchList = ({ loading, data, phrase }) => {
  const content =
    data &&
    !!data.length &&
    data.map((item, index) => (
      <li key={index}>
        <h2>{item.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: item.snippet }} />
      </li>
    ));

  return (
    <SearchListStyled>
      {loading ? <Loader /> : <ul>{content}</ul>}
      {data && data.length === 0 && (
        <div className="no-results">
          <p>
            Sorry! No matches found for <span>"{`${phrase}`}"</span>
          </p>
        </div>
      )}
    </SearchListStyled>
  );
};

const { string, bool, array } = PropTypes;

SearchList.propTypes = {
  loading: bool.isRequired,
  data: array,
  phrase: string,
};

SearchList.defaultProps = {
  phrase: "",
  data: null,
};

export default SearchList;
