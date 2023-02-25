import styled from "styled-components";

export const StyledArtisteInfo = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  transition: 0.5s ease;
  padding-bottom: 150px;

  .hero-bg {
    min-height: 40vh;
    background-color: #000;
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
      background: linear-gradient(
        90deg,
        rgba(1, 18, 1, 0.3828125) 95%,
        rgba(14, 64, 14, 0.5004595588235294) 100%
      );
      opacity: 0.6;
    }

    .info-txt {
      position: relative;
      z-index: 111;
      text-transform: capitalize;
      margin-bottom: 4rem;
      margin-left: 1rem;

      h1 {
        font-size: clamp(5rem, 10vw, 7rem);
        margin-left: -0.5rem;
      }
    }
  }

  .follow {
    width: 100%;
    padding: 20px;
    margin: 2rem auto;
    gap: 2rem;

    .play {
      padding: 20px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      background-color: #1cdf63;
    }

    .follow-btn {
      padding: 5px 15px;
      border: 1px #fff solid;
      color: #fff;
      border-radius: 5px;
      background-color: transparent;
    }
  }
`;
