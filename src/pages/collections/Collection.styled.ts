import styled from "styled-components";

export const StyledCollection = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  overflow: hidden;

  .collection-info {
    height: 100vh;
    overflow-y: auto;
    padding-top: 20px;
    padding-bottom: 150px;
    position: relative;
  }

  .her-bg {
    background-color: #464646 !important;
  }

  .cover-img {
    background-color: #282828 !important;
  }

  @media (max-width: 680px) {
    grid-template-columns: auto;
  }
`;
