import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const StyledSkeletonLoading = styled.div`
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

  .skeleton-greeting {
    margin-bottom: 2rem;

    .skeleton-title {
      width: 200px;
      height: 30px;
      background: linear-gradient(90deg, #282828 25%, #383838 50%, #282828 75%);
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .skeleton-strips {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      .skeleton-strip {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        background: #181818;
        border-radius: 4px;
        width: 300px;

        .skeleton-box {
          width: 50px;
          height: 50px;
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
          width: 150px;
          height: 20px;
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

  .skeleton-charts,
  .skeleton-artists,
  .skeleton-podcasts {
    margin-bottom: 2rem;

    .skeleton-title {
      width: 150px;
      height: 30px;
      background: linear-gradient(90deg, #282828 25%, #383838 50%, #282828 75%);
      background-size: 200% 100%;
      animation: ${shimmer} 1.5s infinite;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .skeleton-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;

      .skeleton-card {
        background: #181818;
        padding: 1rem;
        border-radius: 4px;

        .skeleton-image {
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(
            90deg,
            #282828 25%,
            #383838 50%,
            #282828 75%
          );
          background-size: 200% 100%;
          animation: ${shimmer} 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .skeleton-text {
          width: 80%;
          height: 20px;
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
