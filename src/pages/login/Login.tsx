import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { BsSpotify } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase-config";
import { AppContext } from "../../global/Context";
import { StyledLogin } from "./Login.styled";

function Login() {
  const { getCurrentUser } = useContext(AppContext);
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);

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
    <StyledLogin>
      <div className="login-nav">
        <h1>
          <BsSpotify />
        </h1>
      </div>
      <p className="sign-p">Sign up for free to start listening.</p>
      <div className="login-container">
        <div className="box col gap-1">
          <h2>Spotifye</h2>
          <p>to continue to Spotifye</p>
          {/* <button className="spotify">
            <FaSpotify />
            Sign in with Spotify
          </button> */}
          <button className="google" onClick={signInWithGoogle}>
            <FcGoogle />
            Sign in with Google
          </button>
          <div className="row center gap-1 line-row">
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
          </div>
          <form
            className="col gap-1"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Email address or username"
              required
              disabled
            />
            <input type="password" placeholder="Password" required disabled />

            <div className="row btw center">
              <Link to="/login">Create Account</Link>
              <button className="sign-in-btn">Sign in</button>
            </div>
          </form>
          <div
            className="col"
            style={{
              textAlign: "left",
              width: "100%",
              fontSize: "0.8rem",
            }}
          >
            <p>Use Guest mode to sign in privately? </p>
            <Link
              to="/"
              style={{
                color: "royalblue",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
}

export default Login;
