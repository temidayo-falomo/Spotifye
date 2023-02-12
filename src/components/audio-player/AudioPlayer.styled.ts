import styled from "styled-components";

export const StyledAudioPlayer = styled.div`
  position: fixed;
  z-index: 99999;
  height: ${(props: any) =>
    props.displayAudioPlayer === true ? "100vh" : "115px"};
  width: 100%;
  background-color: #000;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
  transition: 0.5s ease;
  

  .nav {
    height: 80px;
    width: 95%;
    margin: auto;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-weight: 600;
      font-size: 1.5rem;
    }

    .row {
      gap: 2rem;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #1CDF63;
    }
  }

  .main-info {
    height: 80vh;
    padding: 20px;
    width: 90%;
    margin: 2rem auto;
    gap: 1rem;

    .big-img {
      height: 90%;
      width: 600px;
      background-color: royalblue;
      margin: auto 0;
    }

    .lyr-rel {
      margin: 0 auto;
      width: 50%;
      display: flex;
      align-items: center;

      .row {
        gap: 4rem;
        padding-bottom: 10px;
        margin-bottom: 1rem;
        /* border-bottom: 1px gainsboro solid; */


      }
    }
  }

  .audio-player-container {
    width: 100%;
    background: #181818;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-top: 2px #282828 solid;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      width: max-content;
    }
  

  .thumbnail-img {
    width: 65px;
    height: 65px;
    border-radius: 5px;
    background-color: #000;
  }

  .slide {
    font-size: 1.5rem;
    .slide-bar {
      width: 600px;
      background-color: #282828;
      border-radius: 5px;
      height: 5px;
    }
  }
}
`;
