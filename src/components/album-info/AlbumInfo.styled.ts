import styled from "styled-components";

export const StyledAlbumInfo = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 150px;

  .hero-bg {
    min-height: 40vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    text-transform: capitalize;

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
      font-size: 4rem;
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

  .mid {
    padding: 20px;
    display: flex;
    /* border: 2px royalblue solid; */
    margin: 0 auto;
    width: 95%;
  }

  .title-dur {
    margin: 2rem auto;
    position: sticky;
    width: 95%;
    border-bottom: 1px #282828 solid;
    padding: 0 2rem;
    padding-bottom: 1rem;
  }

  .album-songs {
    width: 95%;
    margin: 0 auto;
  }
`;
