import React from "react";

const SearchList = ({ loading, data, phrase }) => {
  const content = data.map((item, index) => (
    <li key={index}>
      <h2>{item.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: item.snippet }} />
    </li>
  ));

  return (
    <div>{loading ? <p>Content is loading ...</p> : <ul>{content}</ul>}</div>
  );
};

export default SearchList;
