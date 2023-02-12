import React from "react";
import { FaPlay } from "react-icons/fa";
import { StyledUpNext } from "./UpNext.styled";

function UpNext() {
  return (
    <StyledUpNext>
      <div className="up-next-card">
        <div className="init-row">
          <div
            className="img"
            style={{
              backgroundImage: `url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwoYiy9t7quaZoJ8yJRy77i92V3gJ7XxvcrfWwGFaNJIySRDEV4IkDryKWWA_F_Zy1LfRYDtWPHkDly6_82YQJDCdOPIXY5Lxq3oleFSgm4ATYKPWS9QmwYawzhP0VHG05BY_kO1ClcDbt6AEnfCPmfnc1KquZwuBZT8h_XaiMrcD5FGXsMTPc984T/w1200-h630-p-k-no-nu/Billie-Eilish-Guitar-Songs-Single-Album.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FaPlay className="play-btn" />
          </div>
          <div className="col">
            <h4>The 30th</h4>
            <span
              style={{
                fontSize: "0.8rem",
                color: "gainsboro",
              }}
            >
              Billie Eilish
            </span>
          </div>
        </div>

        <span
          style={{
            fontSize: "0.8rem",
            color: "gainsboro",
          }}
        >
          2:36
        </span>
      </div>

      <div className="up-next-card">
        <div className="init-row">
          <div
            className="img"
            style={{
              backgroundImage: `url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwoYiy9t7quaZoJ8yJRy77i92V3gJ7XxvcrfWwGFaNJIySRDEV4IkDryKWWA_F_Zy1LfRYDtWPHkDly6_82YQJDCdOPIXY5Lxq3oleFSgm4ATYKPWS9QmwYawzhP0VHG05BY_kO1ClcDbt6AEnfCPmfnc1KquZwuBZT8h_XaiMrcD5FGXsMTPc984T/w1200-h630-p-k-no-nu/Billie-Eilish-Guitar-Songs-Single-Album.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FaPlay className="play-btn" />
          </div>
          <div className="col">
            <h4>The 30th</h4>
            <span
              style={{
                fontSize: "0.8rem",
                color: "gainsboro",
              }}
            >
              Billie Eilish
            </span>
          </div>
        </div>

        <span
          style={{
            fontSize: "0.8rem",
            color: "gainsboro",
          }}
        >
          2:36
        </span>
      </div>

      <div className="up-next-card">
        <div className="init-row">
          <div
            className="img"
            style={{
              backgroundImage: `url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwoYiy9t7quaZoJ8yJRy77i92V3gJ7XxvcrfWwGFaNJIySRDEV4IkDryKWWA_F_Zy1LfRYDtWPHkDly6_82YQJDCdOPIXY5Lxq3oleFSgm4ATYKPWS9QmwYawzhP0VHG05BY_kO1ClcDbt6AEnfCPmfnc1KquZwuBZT8h_XaiMrcD5FGXsMTPc984T/w1200-h630-p-k-no-nu/Billie-Eilish-Guitar-Songs-Single-Album.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <FaPlay className="play-btn"/>
          </div>
          <div className="col">
            <h4>The 30th</h4>
            <span
              style={{
                fontSize: "0.8rem",
                color: "gainsboro",
              }}
            >
              Billie Eilish
            </span>
          </div>
        </div>

        <span
          style={{
            fontSize: "0.8rem",
            color: "gainsboro",
          }}
        >
          2:36
        </span>
      </div>
      
    </StyledUpNext>
  );
}

export default UpNext;
