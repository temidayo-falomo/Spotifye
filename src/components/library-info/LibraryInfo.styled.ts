import styled from "styled-components";

export const StyledLibraryInfo = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 150px;
  padding: 20px;
  position: relative;

  .max {
    width: max-content;
  }

  .nothing {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 45%;
    text-align: center;
  }

  h2 {
    margin: 2rem 0;
    padding: 0 25px;
  }

  .playlist-info {
    padding: 0 25px;
  }

  .rectangle {
    width: 500px;
    min-height: 200px;
    background-color: #623ef0;
    border-radius: 5px;
    padding: 30px;
    font-weight: 500;

    .darkened {
      color: gainsboro;
    }

    h4 {
      font-size: 2rem;
    }
  }
`;
