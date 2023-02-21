import React, { useContext } from "react";
import { BiLibrary } from "react-icons/bi";
import { AppContext } from "../../global/Context";
import Navbar from "../navbar/Navbar";
import { StyledLibraryInfo } from "./LibraryInfo.styled";

function LibraryInfo() {
  const { user } = useContext(AppContext);

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
        <div className="rectangle col">
          <div
            className="row center"
            style={{
              gap: "0.5rem",
              marginBottom: "4rem",
              flexWrap: "wrap",
            }}
          >
            {user?.likedSongs?.map((song: any) => {
              return (
                <div className="row gap-5 center">
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
      </div>
    </StyledLibraryInfo>
  );
}

export default LibraryInfo;
