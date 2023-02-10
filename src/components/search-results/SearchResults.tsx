import React from "react";
import { Link } from "react-router-dom";
import { StyledSearchResults } from "./SearchResults.styled";

function SearchResults() {
  const [num, setNum] = React.useState(0);
  return (
    <StyledSearchResults>
      <div className="top row gap-1">
        <button style={{ backgroundColor: "#fff", color: "#000" }}>All</button>
        <button>Artists</button>
        <button>Albums</button>
        <button>Tracks</button>
        <button>Playlists</button>
      </div>

      <div className="row init-res">
        <div className="col top-res">
          <h2>Top Result</h2>
          <div className="main-res-card col">
            <div className="thumbnail"></div>
            <h3>Donda</h3>
            <div className="row gap-1 center">
              <Link to="/">Kanye West</Link>
              <button>Album</button>
            </div>
          </div>
        </div>

        <div className="col"></div>
      </div>
    </StyledSearchResults>
  );
}

export default SearchResults;
