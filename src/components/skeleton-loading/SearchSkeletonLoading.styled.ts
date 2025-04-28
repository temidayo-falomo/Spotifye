import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const StyledSearchSkeletonLoading = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  padding-bottom: 150px;
  background: #121212;

  .skeleton-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .skeleton-search {
      width: 300px;
      height: 40px;
      background: linear-gradient(90deg, #282828 25%, #383838 50%, #282828 75%);
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
      border-radius: 20px;
    }

    .skeleton-user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(90deg, #282828 25%, #383838 50%, #282828 75%);
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
    }
  }

  .skeleton-browse-all {
    .skeleton-title {
      width: 150px;
      height: 30px;
      background: linear-gradient(90deg, #282828 25%, #383838 50%, #282828 75%);
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
      border-radius: 4px;
      margin-bottom: 1.5rem;
    }

    .skeleton-categories {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1.5rem;

      .skeleton-category {
        position: relative;
        aspect-ratio: 1;
        background: #181818;
        border-radius: 8px;
        overflow: hidden;
        padding: 1rem;

        .skeleton-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #282828 25%,
            #383838 50%,
            #282828 75%
          );
          background-size: 200% 100%;
          animation: ${shimmer} 1.5s infinite;
          border-radius: 4px;
        }

        .skeleton-text {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          width: 60%;
          height: 24px;
          background: linear-gradient(
            90deg,
            #282828 25%,
            #383838 50%,
            #282828 75%
          );
          background-size: 200% 100%;
          animation: ${shimmer} 1.5s infinite;
          border-radius: 4px;
        }
      }
    }
  }
`;
