import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { MdHomeFilled, MdAddBox } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BiLibrary } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { AppContext } from "../../global/Context";
import PlaylistsList from "../playlists-list/PlaylistsList";

function Sidebar() {
  const { displaySidebar, setDisplaySidebar } = useContext(AppContext);
  return (
    <StyledSidebar displaySidebar={displaySidebar}>
      <div className="logo">
        <h2>Spotifye</h2>
      </div>

      <div className="col routes">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <MdHomeFilled className="icon" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <BiSearch className="icon" />
          <span>Search</span>
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <BiLibrary className="icon" />
          <span>Library</span>
        </NavLink>
      </div>

      <div className="col feats">
        <NavLink
          to="/create-playlist"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <MdAddBox className="icon" />
          <span>Create Playlist</span>
        </NavLink>

        <NavLink
          to="/liked-songs"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <BsFillBookmarkHeartFill className="icon" />
          <span>Liked Songs</span>
        </NavLink>
        {/* 
        <Link to="/">
          <MdAddBox />
          <span>Your Episodes</span>
        </Link> */}
      </div>

      <PlaylistsList />
    </StyledSidebar>
  );
}

export default Sidebar;
