import React, { useContext } from "react";
import { AppContext } from "../../global/Context";
import Card from "../card/Card";
import { StyledCharts } from "./Charts.styled";

function Charts() {
  const { homeData } = useContext(AppContext);

  return (
    <StyledCharts>
      <h3>Top Singles</h3>

      <div className="charts row">
        {homeData?.tracks?.data?.map((itemData: any, i: number) => {
          return (
            <React.Fragment key={i}>
              <Card itemData={itemData} />
            </React.Fragment>
          );
        })}
      </div>
    </StyledCharts>
  );
}

export default Charts;
