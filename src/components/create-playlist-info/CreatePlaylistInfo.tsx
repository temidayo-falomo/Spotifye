import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { StyledCreatePlaylistInfo } from "./CreatePlaylistInfo.styled";

function CreatePlaylistIfo() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [searchData, setSearchData] = React.useState<any>(null);
  const [searchLoading, setSearchLoading] = React.useState<boolean>(false);

  const fetchSearchResults = async () => {
    setSearchLoading(true);
    fetch(
      "https://n3rdy-cors-proxy.glitch.me/useproxy?link=" +
        encodeURIComponent(`https://api.deezer.com/search?q=${searchValue}`)
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data.data);
        setSearchLoading(false);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledCreatePlaylistInfo>
      <div className="hero-bg img-def">
        <Navbar />
        <div className="row gap-1">
          <div
            className="big-thumbnail"
            style={{
              backgroundColor: "#282828",
            }}
          >
            <FiMusic
              style={{
                fontSize: "5rem",
              }}
            />
          </div>
          <div className="info-txt">
            <span className="row gap-5 center">PLAYLIST</span>
            <h1>My Playlist #1</h1>
            <div className="row gap-5 center">
              <div className="avatar"></div>
              <Link to="/">Temidayo</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mid row">
        <HiOutlineDotsHorizontal className="pointer" />
      </div>

      <div className="find col gap-1">
        <div className="row center btw">
          <h2>Let's find something for your playlist</h2>
          <MdClose
            style={{
              fontSize: "2rem",
            }}
          />
        </div>

        <div className="row">
          <form
            className="input-holder row"
            onSubmit={(e) => {
              e.preventDefault();
              fetchSearchResults();
            }}
          >
            <button>
              <BsSearch />
            </button>
            <input
              required
              type="search"
              placeholder="Search for songs, artists, or podcasts"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </form>
        </div>

        <div className="search-results col gap-1">
          {searchValue !== "" &&
            searchData?.map((song: any, index: number) => {
              return (
                <div className="row btw card-row" key={index}>
                  <div className="init-row row gap-1">
                    <div
                      className="thumbnail img-def"
                      style={{
                        backgroundImage: `url(${song.album.cover_medium})`,
                      }}
                    ></div>
                    <div className="col gap-5">
                      <h4>{song.title}</h4>
                      <span>{song.artist.name}</span>
                    </div>
                  </div>

                  <Link
                    to="/playlist/1"
                    style={{
                      textDecoration: "none",
                      textAlign: "left",
                    }}
                  >
                    {song.album.title}
                  </Link>

                  <button>Add</button>
                </div>
              );
            })}
          {searchLoading && <p>Loading...</p>}
          {searchData?.length === 0 && <p>No results found</p>}
        </div>
      </div>
    </StyledCreatePlaylistInfo>
  );
}

export default CreatePlaylistIfo;
