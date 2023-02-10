import React from "react";
import { StyledGreeting } from "./Greeting.styled";

function Greeting() {
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
        <div className="strip row gap-1 center">
          <div
            className="box"
            style={{
              backgroundImage: `url("https://assets.vogue.com/photos/609bb445758287e5e091eeed/1:1/w_2000,h_2000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h3>Billie Mix</h3>
        </div>
        <div className="strip row gap-1 center">
          <div
            className="box"
            style={{
              backgroundImage: `url("https://biographle.com/wp-content/uploads/2021/10/Ruger.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h3>Ruger Mix</h3>
        </div>
        <div className="strip row gap-1 center">
          <div
            className="box"
            style={{
              backgroundImage: `url("https://justnaija.com/uploads/2022/10/BlaqBonez-Young-Preacher-Album-artwork.jpeg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h3>Blaqbonez Mix</h3>
        </div>

        <div className="strip row gap-1 center">
          <div
            className="box"
            style={{
              backgroundImage: `url("https://www.thewikifeed.com/wp-content/uploads/2021/07/jaden-smith-1.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h3>Jaden Mix</h3>
        </div>
      </div>
    </StyledGreeting>
  );
}

export default Greeting;
