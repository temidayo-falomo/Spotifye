import styled from "styled-components";

export const StyledEditPlaylist = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  background-color: transparent;
  position: fixed;
  width: 100%;
  z-index: 99999999999999;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.1);
  background-color: rgba(9, 12, 15, 0.21);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.8px);
  -webkit-backdrop-filter: blur(1.8px);

  h4 {
    font-size: 1.5rem;
  }

  .pointer {
    font-size: 1.5rem;
  }

  .edit-modal {
    width: 480px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
    background-color: #282828;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .holder {
      gap: 1rem;
    }

    .col {
      gap: 1rem;
      width: 100%;
    }

    .cover-img {
      min-width: 180px;
      height: 100%;
      border-radius: 10px;
      display: grid;
      place-content: center;
      font-size: 2rem;
      background-color: #282828;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    input,
    textarea {
      background-color: #3e3d3d;
      color: #fff;
      border-radius: 5px;
      width: 100%;
    }

    input {
      border: none;
      padding: 8px;
    }

    textarea {
      border: none;
      padding: 8px;
      height: 100px;
      outline: none;
      cursor: not-allowed;
    }
  }

  .btn-row {
    justify-content: flex-end;
    align-items: flex-end;

    button {
      padding: 10px 30px;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;

      :hover {
        padding: 9px 29px;
        border: 2px solid #fff;
        background-color: transparent;
        color: #fff;
      }
    }
  }

  p {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
