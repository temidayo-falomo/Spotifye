import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { auth, provider } from "../../firebase/firebase-config";
import { AppContext } from "../../global/Context";
import { StyledError } from "./Error.styled";

function Error() {
  const [cookies, setCookie] = useCookies(["user"]);
  const { getCurrentUser } = useContext(AppContext);

  let navigate = useNavigate();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setCookie("user", res.user.uid, { path: "/" });

        let userInfo = {
          userId: res.user.uid,
          fullName: res.user.displayName,
          userAvatar: res.user.photoURL,
          email: res.user.email,
          password: "1234",
          likedSongs: [],
          likedPlaylists: [],
          likedAlbums: [],
          followedArtists: [],
        };

        axios
          .post("https://spotifye-backend.vercel.app/api/add-user", userInfo)
          .catch((err) => {
            console.log(err);
          });

        getCurrentUser(res.user.uid);
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledError>
      <Sidebar />
      <div className="error-info">
        <Navbar />
        <div className="main">
          <div className="middle">
            <img src="./assets/yeti.png" alt="" />
            <p>You are not signed in, silly.</p>
            <button className="center gap-5 row" onClick={signInWithGoogle}>
              <FcGoogle /> Sign In
            </button>
          </div>
        </div>
      </div>
    </StyledError>
  );
}

export default Error;
