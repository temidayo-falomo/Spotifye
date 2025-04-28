import React from "react";
import { StyledSearchSkeletonLoading } from "./SearchSkeletonLoading.styled";

function SearchSkeletonLoading() {
  return (
    <StyledSearchSkeletonLoading>
      <div className="skeleton-navbar">
        <div className="skeleton-search"></div>
        <div className="skeleton-user"></div>
      </div>

      <div className="skeleton-browse-all">
        <div className="skeleton-title"></div>
        <div className="skeleton-categories">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="skeleton-category">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>
    </StyledSearchSkeletonLoading>
  );
}

export default SearchSkeletonLoading; 