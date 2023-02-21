import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { StyledCreatePlaylistInfo } from "./CreatePlaylistInfo.styled";

function CreatePlaylistIfo() {
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
        <HiOutlineDotsHorizontal className="pointer"/>
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
            }}
          >
            <button>
              <BsSearch />
            </button>
            <input
              required
              type="search"
              placeholder="Search for songs, artists, or podcasts"
           
              onChange={(e) => {
                // setSearchValue(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </StyledCreatePlaylistInfo>
  );
}

export default CreatePlaylistIfo;
