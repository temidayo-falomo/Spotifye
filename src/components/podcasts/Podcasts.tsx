import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import Card from "../card/Card";
import { StyledPodcasts } from "./Podcasts.styled";

function Podcasts() {
  const { homeData } = useContext(AppContext);

  return (
    <StyledPodcasts>
      <h3>Podcasts</h3>

      <div className="podcasts row">
        {homeData?.podcasts?.data
          ?.slice(0, 5)
          .map((itemData: any, i: number) => {
            return (
              <React.Fragment key={i}>
                <Card itemData={itemData} />
              </React.Fragment>
            );
          })}
      </div>
    </StyledPodcasts>
  );
}

export default Podcasts;
