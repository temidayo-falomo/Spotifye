import styled from "styled-components";

export const StyledUpNext = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 95%;
  max-height: 550px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.8em;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5e5d5d;
  }

  .up-next-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    height: 65px;
    gap: 1rem;
    border-radius: 5px;

    :hover {
      .play-btn {
        opacity: 1;
        transition: 0.3s ease;
      }

      .img {
        background-color: linear-gradient(
          to bottom,
          #12151343 5%,
          rgba(38, 22, 22, 0.076) 100%
        ) !important;
        background-blend-mode: darken;
      }
    }

    .play-btn {
      opacity: 0;
      transition: 0.3s ease;
    }

    .img {
      height: 50px;
      width: 50px;
      background-color: #181818;
      border-radius: 10px;
      display: grid;
      place-content: center;
      cursor: pointer;
    }

    .init-row {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      .col {
        gap: 0.3rem;
      }
    }
  }
`;
