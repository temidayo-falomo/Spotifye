import styled from "styled-components";

export const StyledPlaylistInfo = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 150px;

  .her-bg {
    height: 35vh;
    padding: 20px;

    min-height: 40vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  .extractor-holder {
    border: 2px red solid;
    display: flex;
    gap: 2rem;
    display: none;
  }

  .main {
    .cover-img {
      width: 250px;
      height: 250px;
      border-radius: 10px;
      background-color: aliceblue;
    }
  }
`;
