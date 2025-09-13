import React, { useContext, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { Overlay } from "./Sidebar.styled";
import { MdHomeFilled, MdAddBox } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BiLibrary } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { AppContext } from "../../global/Context";
import PlaylistsList from "../playlists-list/PlaylistsList";

function Sidebar() {
  const { displaySidebar, setDisplaySidebar } = useContext(AppContext);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close sidebar when location changes (page navigation)
  useEffect(() => {
    setDisplaySidebar(true);
  }, [location, setDisplaySidebar]);

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !displaySidebar
      ) {
        setDisplaySidebar(true);
      }
    };

    if (!displaySidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displaySidebar, setDisplaySidebar]);

  return (
    <>
      {!displaySidebar && <Overlay onClick={() => setDisplaySidebar(true)} />}
      <StyledSidebar ref={sidebarRef} displaySidebar={displaySidebar}>
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
    </>
  );
}

export default Sidebar;
