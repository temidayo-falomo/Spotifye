import styled from "styled-components";

export const StyledPlaylistsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px #464646 solid;

  .col {
    gap: 1.5rem;
  }

  span {
    font-size: 0.8rem;
    color: #F5F5F5;
    cursor: pointer;
  }
`;
