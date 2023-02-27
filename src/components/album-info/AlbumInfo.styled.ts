import styled from "styled-components";

export const StyledAlbumInfo = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 150px;

  /* .abs {
    position: absolute;
    width: 100%;
    height: 60%;
    bottom: -60%;
    z-index: -99999;
    left: 0;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(1, 18, 1, 0.3828125) 95%,
        rgba(14, 64, 14, 0.5004595588235294) 100%
      );
      opacity: 0.9;
      z-index: -99999;
    }
  } */

  .hero-bg {
    min-height: 40vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    text-transform: capitalize;
    position: relative;

    .extractor-holder {
      border: 2px red solid;
      display: flex;
      gap: 2rem;
      display: none;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(1, 18, 1, 0.3828125) 95%,
        rgba(14, 64, 14, 0.5004595588235294) 100%
      );
      opacity: 0.6;
    }

    .xl_image {
      min-width: 250px;
      height: 270px;
      border-radius: 10px;
      background-color: #282828;
    }

    h1 {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      margin-top: 0.5rem;
    }

    .desc {
      margin-top: 2rem;

      .tiny-circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #000;
      }
    }
  }

  .title-dur {
    margin: 1rem auto;
    position: sticky;
    width: 95%;
    border-bottom: 1px #282828 solid;
    padding: 0 1rem;
    padding-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  .album-songs {
    width: 95%;
    margin: 0 auto;
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
    }
  }
`;
