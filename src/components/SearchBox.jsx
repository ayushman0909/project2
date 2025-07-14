import React from "react";
import "./SearchBox.css"

const SearchBox = () => {
  return (
    <div className="SearchBoxContainer">
     <label htmlFor="SearchBox"></label>
      <input type="text" id="SearchInput" placeholder=" Search"/>
      <h1 className="heading">Maternity Photographers in Bengaluru</h1>
    </div>
  );
};

export default SearchBox;
