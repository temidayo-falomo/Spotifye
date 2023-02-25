import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SongCardRow from "../../components/song-card-row/SongCardRow";
import { AppContext } from "../../global/Context";
import { StyledLikedSongs } from "./LikedSongs.styled";

function LikedSongs() {
  const { user, setUser } = useContext(AppContext);

  return (
    <StyledLikedSongs>
      <Sidebar />
      <div className="liked-songs-info">
        <div className="hero-bg img-def">
          <Navbar />
          <div className="row gap-1 top-holder">
            <div
              className="big-thumbnail"
              style={{
                backgroundColor: "#76848F",
              }}
            >
              <FiMusic
                style={{
                  fontSize: "5rem",
                }}
              />
            </div>
            <div className="info-txt gap-1">
              <span className="row gap-5 center">PLAYLIST</span>
              <h1>Liked Songs</h1>
              <div className="row gap-5 center">
                <div
                  className="avatar img-def"
                  style={{
                    backgroundImage: `url(${user?.userAvatar})`,
                  }}
                ></div>
                <Link to="/">Temidayo</Link>
                <div style={{ display: "inline", textAlign: "center" }}>•</div>
                <span>{user?.likedSongs.length} songs</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mid"
          style={{
            fontSize: "2rem",
            padding: "25px",
          }}
        >
          <FaPlay />
        </div>

        <div className="liked-songs-list col gap-1">
          {user?.likedSongs.map((song: any, index: number) => {
            return <SongCardRow song={song} index={index} key={index} />;
          })}
        </div>
      </div>
    </StyledLikedSongs>
  );
}

export default LikedSongs;
