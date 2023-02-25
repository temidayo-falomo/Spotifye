import styled from "styled-components";

export const StyledArtiste = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  overflow: hidden;

  @media (max-width: 680px) {
    grid-template-columns: auto;
  }
`;
