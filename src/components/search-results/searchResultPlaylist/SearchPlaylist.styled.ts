import styled from "styled-components";

export const StyledSearchPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  .search-playlist-container {
    display: flex;
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 0em;
    }
  }
`;
