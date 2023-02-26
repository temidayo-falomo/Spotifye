import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import { StyledPlaylistsList } from "./PlaylistsList.styled";

function PlaylistsList() {
  const { user } = useContext(AppContext);

  return (
    <StyledPlaylistsList>
      <div className="col gap-1">
        {user?.user_playlists?.map((song: any, index: number) => {
          return <span key={index}>{song.title}</span>;
        })}
      </div>
    </StyledPlaylistsList>
  );
}

export default PlaylistsList;
