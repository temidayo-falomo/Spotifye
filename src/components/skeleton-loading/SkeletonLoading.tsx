import React from "react";
import { StyledSkeletonLoading } from "./SkeletonLoading.styled";

function SkeletonLoading() {
  return (
    <StyledSkeletonLoading>
      <div className="skeleton-navbar">
        <div className="skeleton-search"></div>
        <div className="skeleton-user"></div>
      </div>

      <div className="skeleton-greeting">
        <div className="skeleton-title"></div>
        <div className="skeleton-strips">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-strip">
              <div className="skeleton-box"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="skeleton-charts">
        <div className="skeleton-title"></div>
        <div className="skeleton-cards">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="skeleton-artists">
        <div className="skeleton-title"></div>
        <div className="skeleton-cards">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="skeleton-podcasts">
        <div className="skeleton-title"></div>
        <div className="skeleton-cards">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>
    </StyledSkeletonLoading>
  );
}

export default SkeletonLoading;
