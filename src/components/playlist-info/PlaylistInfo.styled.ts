import styled from "styled-components";

export const StyledPlaylistInfo = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 150px;

  h1 {
    font-size: clamp(2.5rem, 4vw, 4rem);
  }

  .her-bg {
    padding: 20px;
    min-height: 40vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 99;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  .extractor-holder {
    display: flex;
    gap: 2rem;
    display: none;
  }

  .main {
    .cover-img {
      min-width: 250px;
      height: 250px;
      border-radius: 10px;
      background-color: aliceblue;
    }
  }

  .mid {
    padding: 20px;
    gap: 2rem;
    margin: 1rem auto;
    width: 98%;

    .play {
      padding: 20px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      background-color: #1cdf63;
      color: #000;
    }

    .pointer {
      font-size: 2rem;
    }
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
