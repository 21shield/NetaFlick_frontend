import React, { useState } from "react";
import { searchMovies } from "../api/index";

import "../styles/navbar.css";

export default function Navbar(props) {
  //   const { search } = Input;
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("this is the search", search);
    searchMovies(search).then((data) => {
      props.searchedMovies(data);
    });
  };

  //   console.log("from the nav", searchMovies);
  return (
    <div className="nav">
      <ul>
        <li className="logo">
          {/* <a href="https://fontmeme.com/netflix-font/"> */}
          <img
            src="https://fontmeme.com/permalink/201124/8fc629620fcbc615c4064fa937665cdb.png"
            alt="netflix-font"
            border="0"
          />
          {/* </a> */}
        </li>
        <li>
          <form className="searchForm" onSubmit={handleSubmit}>
            <div className="search">
              <input
                className="searchBox"
                type="text"
                placeholder="Search Movies..."
                name="searchTerm"
                value={search}
                onChange={handleChange}
              />

              <button className="searchBtn" type="submit" value="Submit">
                Search
              </button>
            </div>
          </form>
        </li>
      </ul>
    </div>
  );
}
