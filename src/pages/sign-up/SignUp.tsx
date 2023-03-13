import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { BsEyeSlashFill, BsSpotify } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { AppContext } from "../../global/Context";
import { StyledLogin } from "../login/Login.styled";

function SignUp() {
  const { getCurrentUser } = useContext(AppContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const [cookies, setCookie] = useCookies(["user"]);

  const [error, setError] = React.useState("");

  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setCookie("user", res.user.uid, { path: "/" });

        let userInfo = {
          userId: res.user.uid,
          fullName: name,
          userAvatar:
            "https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg",
          email: res.user.email,
          password: "1234",
          likedSongs: [],
          likedPlaylists: [],
          likedAlbums: [],
          followedArtists: [],
        };

        axios
          .post("https://spotifye-backend.vercel.app/api/add-user", userInfo)
          .then(() => {
            navigate("/");
          })
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });

        getCurrentUser(res.user.uid);
      })
      .catch((err) => console.log(err));
  };

  const getRandomEmail = () => {
    if (name.length > 0) {
      setEmail(name + "@fake.com");
    } else {
      axios
        .get("https://random-word-api.herokuapp.com/word")
        .then((res) => setEmail(res.data[0] + "@fake.com"))
        .catch((err) => console.error(err));
    }
  };

  const getRandomName = () => {
    if (email.includes("@fake.com")) {
      setName(email.split("@")[0]);
    } else {
      axios
        .get("https://random-word-api.herokuapp.com/word")
        .then((res) => setName(res.data[0]))
        .catch((err) => console.error(err));
    }
  };

  const generatePassword = () => {
    let passNum = "";
    let passChar = "";

    for (let i = 0; i < 10; i++) {
      passNum += Math.floor(Math.random() * 10);
    }

    for (let i = 0; i < 10; i++) {
      passChar += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    let result = Array.from(
      passNum.length > passChar.length ? passNum : passChar,
      (_, i) => (passNum[i] || "") + (passChar[i] || "")
    ).join("");

    return result;
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
          <button className="google">
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
              handleSubmit(e);
            }}
          >
            <div className="row center gap-5">
              <input
                type="text"
                placeholder="Email address or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="notif" onClick={getRandomEmail}>
                Generate random email
              </div>
            </div>

            <div className="row center gap-5">
              <input
                type="text"
                placeholder="Create Username"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="notif" onClick={getRandomName}>
                Generate Username
              </div>
            </div>

            <div className="row center gap-5">
              <BsEyeSlashFill
                className="pointer"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="notif"
                onClick={() => {
                  setPassword(generatePassword());
                }}
              >
                Generate Password
              </div>
            </div>

            <div className="btw center">
              <Link to="/login">Already have an account?</Link>
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
            <p
              style={{
                marginBottom: "0.5rem",
              }}
            >
              Use Guest mode to sign in privately?{" "}
            </p>
            <Link
              to="/"
              style={{
                color: "royalblue",
                display: "flex",
                alignItems: "center",
              }}
            >
              Learn More
              <img src="./assets/yeti.png" alt="" className="ghost" />
            </Link>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
}

export default SignUp;
