import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import { StyledAudioPlayer } from "./AudioPlayer.styled";
import { FaHeart } from "react-icons/fa";
import {
  RiPictureInPictureFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from "react-icons/ri";
import { BiShuffle } from "react-icons/bi";
import { TbDevices2, TbRepeat } from "react-icons/tb";
import { BsPlayFill } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import { RxSpeakerLoud } from "react-icons/rx";
import { Link } from "react-router-dom";

function AudioPlayer() {
  const { displayAudioPlayer, setDisplayAudioPlayer } = useContext(AppContext);

  const handleDisplayAudioPlayer = () => {
    setDisplayAudioPlayer(!displayAudioPlayer);
  };

  // const handleDisplayLyrics = () => {
  //   setDisplayLyrics(!displayLyrics);
  // }

  let trackName = "Oxytocin";
  let artistName = "Billie Eilish";

  const handleFetchLyrics = () => {
    fetch(`https://lyrist.vercel.app/api/:${trackName}/:${artistName}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <StyledAudioPlayer displayAudioPlayer={displayAudioPlayer}>
      <div className="nav">
        <div className="logo">Spotifye</div>
        <div className="row gap-1">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/">Library</Link>
        </div>
        <div className="avatar"></div>
      </div>
      <div className="main-info row">
        <div
          className="big-img"
          style={{
            backgroundImage: `url("https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="col lyr-rel">
          <div className="row gap-1">
            <h4 className="pointer">Up Next</h4>
            <h4 className="pointer">Lyrics</h4>
          </div>
          <div className="lyrics">
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              distinctio nesciunt nemo corporis earum eum ad dolor ducimus
              deleniti explicabo repudiandae velit voluptatibus dolore alias,
              veniam facere harum eveniet.
              <br />
              <br />
              Tempore sint sunt praesentium impedit delectus cupiditate autem
              magni harum. Similique ad error hic excepturi vel repudiandae
              laudantium incidunt dolore dolores? Voluptates, quae. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              Ipsum distinctio nesciunt nemo corporis earum eum ad dolor ducimus
              deleniti explicabo repudiandae velit voluptatibus dolore alias,
              veniam facere harum eveniet.
              <br />
              Tempore sint sunt praesentium impedit delectus cupiditate autem
              magni harum. Similique ad error hic excepturi vel repudiandae
              laudantium incidunt dolore dolores? Voluptates, quae.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              distinctio nesciunt nemo corporis earum eum
            </article>
          </div>
        </div>
      </div>

      <div
        className="audio-player-container"
        onClick={handleDisplayAudioPlayer}
      >
        <div className="row gap-1 center">
          <div
            className="thumbnail-img"
            style={{
              backgroundImage: `url("https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="col gap-5">
            <h4>Oxytocin</h4>
            <span>Billie Eilish</span>
          </div>
          <div className="row gap-1 center" style={{ marginLeft: "1rem" }}>
            <FaHeart />
            <RiPictureInPictureFill />
          </div>
        </div>

        <div className="slide">
          <div className="col center gap-1">
            <div className="row gap-1 center">
              <BiShuffle />
              <RiSkipBackFill />
              <button
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  display: "grid",
                  placeContent: "center",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <BsPlayFill />
              </button>
              <RiSkipForwardFill />
              <TbRepeat />
            </div>
            <div className="slide-bar row gap-5"></div>
          </div>
        </div>

        <div
          className="row center gap-1"
          style={{
            fontSize: "1.5rem",
          }}
        >
          <HiOutlineViewList />
          <TbDevices2 />
          <div className="row gap-5">
            <RxSpeakerLoud />
            <input type="range" min="1" max="100" id="myRange"></input>
          </div>
        </div>
      </div>
    </StyledAudioPlayer>
  );
}

export default AudioPlayer;
