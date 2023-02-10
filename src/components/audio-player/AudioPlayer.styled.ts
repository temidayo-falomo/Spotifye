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
    width: 90%;
    margin: auto;
    border: 2px #181818 solid;
    margin-top: 1rem;
  }

  .main-info {
    /* border: 2px royalblue solid; */
    height: 80vh;
    padding: 20px;
    width: 90%;
    margin: 2rem auto;

    .big-img {
      height: 90%;
      width: 600px;
      background-color: royalblue;
      margin: auto 0;
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
