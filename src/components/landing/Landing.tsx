import React, { useContext, useEffect, useState } from "react";
import Charts from "../charts/Charts";
import Greeting from "../greeting/Greeting";
import Navbar from "../navbar/Navbar";
import Podcasts from "../podcasts/Podcasts";
import PopularArtistes from "../popular-artistes/PopularArtistes";
import { StyledLanding } from "./Landing.styled";
import { ColorExtractor } from "react-color-extractor";
import { AppContext } from "../../global/Context";
import { gsap } from "gsap";

function Landing() {
  const [colors, setColors] = useState<any>(null);
  const { homeData, defaultGradientNum } = useContext(AppContext);

  const heroBgRef = React.useRef(null);

  const [defaultPic, setDefaultPic] = useState<string | undefined | null | any>(
    homeData?.playlists?.data?.slice(0, 6)[defaultGradientNum]?.picture_medium
  );

  useEffect(() => {
    setDefaultPic(
      homeData?.playlists?.data?.slice(0, 6)[defaultGradientNum]?.picture_medium
    );
  }, [defaultGradientNum]);

  useEffect(() => {
    if (colors) {
      gsap.to(".abs", {
        background: `linear-gradient(to bottom, ${colors[0]} 5%, rgba(32, 22, 22, 0.363) 100%)`,
        duration: 1,
      });
    } else {
      gsap.to(".abs", {
        background: `linear-gradient(to bottom, #189544 5%, rgba(32, 22, 22, 0.363) 100%)`,
        duration: 1,
      });
    }
  }, [colors]);

  const getColors = (detectedColorCodes: any) => {
    setColors(detectedColorCodes);
  };

  return (
    <StyledLanding colors={colors}>
      <div className="extractor-holder">
        <ColorExtractor getColors={getColors}>
          <img
            src={`${defaultPic}`}
            style={{ width: 0, height: 0 }}
            alt="sample"
          />
        </ColorExtractor>
      </div>

      <div className="abs" ref={heroBgRef}></div>
      <Navbar />
      <Greeting />
      <Charts />
      <PopularArtistes />
      <Podcasts />
    </StyledLanding>
  );
}

export default Landing;
