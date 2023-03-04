import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledPlaylistsList } from "./PlaylistsList.styled";

function PlaylistsList() {
  const { userPlaylists } = useContext(AppContext);
  let navigate = useNavigate();
  let id = useParams().id;

  const handleNavigate = (song: { _id: string; title: string }) => {
    if (song._id) {
      //to make sure the page is reloaded
      window.location.href = `/collection/playlist/${
        song._id
      }/${encodeURIComponent(song.title)}`;
    } else {
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <StyledPlaylistsList>
      <div className="col gap-1">
        {userPlaylists?.map(
          (
            song: {
              _id: string;
              title: string;
            },
            index: number
          ) => {
            return (
              <span
                style={{
                  color: song._id === id ? "#fff" : "#b3b3b3",
                }}
                key={index}
                onClick={() => {
                  handleNavigate(song);
                }}
              >
                {song.title}
              </span>
            );
          }
        )}
      </div>
    </StyledPlaylistsList>
  );
}

export default PlaylistsList;
