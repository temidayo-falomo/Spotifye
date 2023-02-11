import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import TopArtisteCard from "../top-artiste-card/TopArtisteCard";
import { StyledPopularArtistes } from "./PopularArtistes.styled";

function PopularArtistes() {
  const { homeData } = useContext(AppContext);

  return (
    <StyledPopularArtistes>
      <h3>Popular Artistes</h3>

      <div className="artistes row">
        {homeData?.artists?.data
          ?.slice(0, 5)
          .map((itemData: any, i: number) => {
            return (
              <React.Fragment key={i}>
                <TopArtisteCard itemData={itemData} />
              </React.Fragment>
            );
          })}
      </div>
    </StyledPopularArtistes>
  );
}

export default PopularArtistes;
