import axios from "axios";
import React, { useContext, useState } from "react";
import { FiMusic } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AppContext } from "../../global/Context";
import { StyledEditPlaylist } from "./EditPlaylist.styled";

function EditPlaylist(props: any) {
  const [playlistName, setPlaylistName] = useState<string>(props.playlistName);

  const { setUserPlaylists, userPlaylists } = useContext(AppContext);

  const handleChangeCollectionName = (e: any) => {
    e.preventDefault();
    props.setUserCollection({
      ...props.userCollection,
      title: playlistName,
    });

    const newPlaylists = userPlaylists?.map((playlist: any) => {
      if (playlist._id === props.userCollection._id) {
        return {
          ...playlist,
          title: playlistName,
        };
      }
      return playlist;
    });

    setUserPlaylists(newPlaylists);

    axios
      .put(
        "https://spotifye-backend.vercel.app/api/playlists/edit-playlist-name",
        {
          title: playlistName,
          playlistId: props.userCollection._id,
        }
      )
      .catch((err) => console.log(err));

    props.setShowEdit(false);
  };

  return (
    <StyledEditPlaylist>
      <form
        className="edit-modal"
        onSubmit={(e) => {
          handleChangeCollectionName(e);
        }}
      >
        <div className="row center btw">
          <h4>Edit Details</h4>
          <MdClose
            className="pointer"
            onClick={() => {
              props.setShowEdit(false);
            }}
          />
        </div>

        <div className="row holder">
          <div
            className="cover-img img-def"
            style={{
              backgroundImage: `url(${props.playlistImg})`,
            }}
          >
            {!props.playlistImg && <FiMusic />}
          </div>
          <div className="col">
            <input
              type="text"
              required
              placeholder={playlistName}
              value={playlistName}
              onChange={(e) => {
                setPlaylistName(e.target.value);
              }}
            />
            <textarea
              name=""
              id=""
              placeholder="Add an optional description"
              disabled
            ></textarea>
          </div>
        </div>

        <div className="row btn-row">
          <button>Save</button>
        </div>

        <p>
          By proceeding, you agree to give Spotifye access to the image you
          choose to upload. Please make sure you have the right to upload the
          image.
        </p>
      </form>
    </StyledEditPlaylist>
  );
}

export default EditPlaylist;
