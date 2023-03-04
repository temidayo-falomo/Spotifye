import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import { StyledLibraryInfo } from "./LibraryInfo.styled";

function LibraryInfo() {
  const { user, userPlaylists } = useContext(AppContext);
  let navigate = useNavigate();

  return (
    <StyledLibraryInfo>
      <Navbar />
      {/* <div className="nothing">
        <h2 className="row center gap-5">
          <BiLibrary />
          Nothing to show yet
        </h2>
      </div> */}
      <h2>Playlists</h2>
      <div className="row center gap-1 playlist-info">
        <div
          className="rectangle col"
          onClick={() => {
            navigate("/liked-songs");
          }}
        >
          <div
            className="row center"
            style={{
              gap: "0.5rem",
              marginBottom: "4rem",
              flexWrap: "wrap",
            }}
          >
            {user?.likedSongs?.slice(0, 6).map((song: any, index: number) => {
              return (
                <div className="row gap-5 center" key={index}>
                  <span className="max">{song?.artist.name}</span>
                  <span>•</span>
                  <span className="max darkened">
                    {song.title.length > 20
                      ? song.title?.slice(0, 10) + "..."
                      : song.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="col gap-1">
            <h4>Liked Songs</h4>
            <span>{user?.likedSongs.length} Liked Songs</span>
          </div>
        </div>
        {userPlaylists?.map((playlist: any, index: number) => {
          return (
            <div className="playlist-card" key={index}>
              <div
                className="image img-def"
                onClick={() => {
                  navigate(
                    `/collection/playlist/${playlist._id}/${playlist.title}`
                  );
                }}
                style={{
                  backgroundColor: "#282828",
                  backgroundImage: `url(${playlist?.tracklist[0]?.album?.cover_xl})`,
                }}
              >
                {playlist?.tracklist.length === 0 && <FiMusic />}
              </div>
              <h4>
                {playlist.title?.length > 16
                  ? playlist.title.slice(0, 16) + "..."
                  : playlist?.title}
              </h4>
              <span>
                By{" "}
                {playlist.user?.name?.length > 20
                  ? playlist.user?.name?.slice(0, 20) + "..."
                  : playlist.user?.name}
              </span>

              <button
                className="play-btn"
                onClick={() => {
                  // playFirstSong();
                }}
              >
                <FaPlay />
              </button>
            </div>
          );
        })}
      </div>
    </StyledLibraryInfo>
  );
}

export default LibraryInfo;
