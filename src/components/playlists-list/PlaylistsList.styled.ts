import styled from "styled-components";

export const StyledPlaylistsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px #282828 solid;

  .col {
    gap: 1.5rem;
  }

  span {
    font-size: 0.9rem;
    color: #b3b3b3;
    cursor: pointer;
    font-weight: 600;

    :hover {
      color: #fff;
    }
  }
`;
