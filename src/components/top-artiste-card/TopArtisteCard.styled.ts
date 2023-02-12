import styled from "styled-components";

export const StyledTopArtisteCard = styled.div`
  /* width: 300px; */
  min-height: 320px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #181818;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  cursor: pointer;
  transition: 0.5s ease;
  text-transform: capitalize;
  overflow: hidden;
  position: relative;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.6px);
    -webkit-backdrop-filter: blur(1.6px);
    transition: 0.5s ease;

    .play-btn {
      opacity: 1;
      bottom: 90px;
    }
  }

  h4 {
    font-size: 1.2rem;
  }

  .image {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .play-btn {
    position: absolute;
    bottom: 80px;
    right: 20px;
    background-color: #1db954;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.5s ease;
    width: 50px;
    height: 50px;
    font-size: 1rem;
    display: grid;
    place-content: center;
    place-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    opacity: 0;
  }
`;
