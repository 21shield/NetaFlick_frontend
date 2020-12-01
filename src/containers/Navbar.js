import React, { useState } from "react";
import { searchMovies } from "../api/index";

import "../styles/navbar.css";

export default function Navbar(props) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 1) {
      searchMovies(search).then((data) => {
        console.log(data);
        props.searchedMovies(data);
      });
    } else {
      alert("Try A Search Term");
    }
  };

  return (
    <div className="nav">
      <ul>
        <li className="logo">
          <img
            src="https://fontmeme.com/permalink/201124/8fc629620fcbc615c4064fa937665cdb.png"
            alt="netflix-font"
            border="0"
          />
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
