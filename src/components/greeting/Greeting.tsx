import React, { useContext, useEffect } from "react";
import { TbPlaylist } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../global/Context";
import { StyledGreeting } from "./Greeting.styled";

function Greeting() {
  const { homeData, setDefaultGradientNum } = useContext(AppContext);
  let navigate = useNavigate();
  var today = new Date();
  var curHr = today.getHours();
  let textTime;

  if (curHr < 12) {
    textTime = "morning";
  } else if (curHr < 18) {
    textTime = "afternoon";
  } else {
    textTime = "evening";
  }
  

  return (
    <StyledGreeting>
      <h2>Good {textTime}</h2>

      <div className="strips">
        {homeData?.playlists?.data
          .slice(0, 6)
          .map((itemData: any, i: number) => {
            return (
              <React.Fragment key={i}>
                <div
                  onMouseOver={() => {
                    setTimeout(() => {
                      setDefaultGradientNum(i);
                    }, 500);
                  }}
                  className="strip row gap-1 center"
                  onClick={() => {
                    navigate(
                      `/playlist/${itemData?.id}/${encodeURIComponent(
                        itemData?.title
                      )}`
                    );
                    localStorage.setItem(
                      "currentPlaylistObj",
                      JSON.stringify(itemData)
                    );
                  }}
                >
                  <div
                    className="box"
                    style={{
                      backgroundImage: `url(${itemData?.picture_medium})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <h3>{itemData?.title}</h3>
                </div>
              </React.Fragment>
            );
          })}
        {homeData?.playlists?.data?.length === 0 && (
          <p
            className="row center gap-5"
            style={{ marginTop: "2rem", color: "#1db954", fontWeight: "600" }}
          >
            Couldn't fetch playlists <TbPlaylist />
          </p>
        )}
      </div>
    </StyledGreeting>
  );
}

export default Greeting;
