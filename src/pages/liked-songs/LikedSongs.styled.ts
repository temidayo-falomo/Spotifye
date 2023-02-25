import styled from "styled-components";

export const StyledLikedSongs = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  overflow: hidden;

  .liked-songs-info {
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 150px;
    position: relative;

    .hero-bg {
      min-height: 40vh;
      background-color: #433184;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      .big-thumbnail {
        min-width: 250px;
        height: 250px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
        display: grid;
        place-content: center;
      }

      .info-txt {
        position: relative;
        z-index: 111;
        text-transform: capitalize;
        margin-bottom: 4rem;
        margin-left: 1rem;

        h1 {
          font-size: clamp(3.2rem, 5vw, 5rem);
          margin-left: -0.5rem;
        }

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }
  }

  .liked-songs-list {
    padding: 0 25px;
  }

  @media (max-width: 920px) {
    .top-holder {
      .type {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    span,
    a,
    .center {
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }

  @media (max-width: 680px) {
    grid-template-columns: auto;
  }
`;
