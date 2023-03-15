import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { BsFillHeartFill } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import Navbar from "../../components/navbar/Navbar";
import PlayTrackMid from "../../components/play-track-mid/PlayTrackMid";
import Sidebar from "../../components/sidebar/Sidebar";
import SongCardRow from "../../components/song-card-row/SongCardRow";
import { AppContext } from "../../global/Context";
import { StyledLikedSongs } from "./LikedSongs.styled";

function LikedSongs() {
  const { user } = useContext(AppContext);

  const [loading, setLoading] = useState<boolean>(true);

  const [cookies, setCookie] = useCookies(["user"]);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!cookies.user) {
      navigate("/404");
    }
  }, []);

  return (
    <StyledLikedSongs>
      <Sidebar />
      <div className="liked-songs-info">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="hero-bg img-def">
              <Navbar />
              <div className="row gap-1 top-holder">
                <div
                  className="big-thumbnail"
                  style={{
                    background:
                      "linear-gradient(360deg, #7f8a83 0%, rgba(79,62,168,1) 79%)",
                  }}
                >
                  <BsFillHeartFill
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
                    <Link to="/">{user?.fullName}</Link>
                    <div style={{ display: "inline", textAlign: "center" }}>
                      •
                    </div>
                    <span>{user?.likedSongs.length} songs</span>
                  </div>
                </div>
              </div>
            </div>

            <PlayTrackMid allSongs={user?.likedSongs} />

            <div className="liked-songs-list col gap-1">
              {user?.likedSongs.map((song: any, index: number) => {
                return <SongCardRow song={song} index={index} key={index} />;
              })}
              {user?.likedSongs.length === 0 && (
                <div>
                  <h3 style={{ marginTop: "1rem" }}>
                    No songs in your Liked Songs playlist.
                  </h3>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </StyledLikedSongs>
  );
}

export default LikedSongs;
