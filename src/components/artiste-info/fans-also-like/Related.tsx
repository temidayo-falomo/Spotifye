import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledRelated } from "./Related.styled";

function Related(props: any) {
  let navigate = useNavigate();
  const { artisteRelated } = props;

  const handleNavigateToArtiste = (
    artiste_id: string,
    artiste_name: string
  ) => {
    navigate(`/artiste/${artiste_id}/${artiste_name}`);
    window.document.getElementById("scroller")!.scroll(0, 0);
  };

  return (
    <StyledRelated>
      <div className="row btw center top">
        <div>
          <h2>Fans also like</h2>
        </div>
        <span>SHOW All</span>
      </div>
      <div className="related_container row">
        {artisteRelated?.slice(0, 6).map((item: any) => {
          return (
            <div className="related_card" key={item.id}>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${item.picture_medium})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => handleNavigateToArtiste(item.id, item.name)}
              ></div>
              <h4 onClick={() => handleNavigateToArtiste(item.id, item.name)}>
                {item.name}
              </h4>
              <span>{item.nb_fan.toLocaleString()} Fans</span>
            </div>
          );
        })}
      </div>
    </StyledRelated>
  );
}

export default Related;
