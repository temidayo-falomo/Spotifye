import styled from "styled-components";

export const StyledSongCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;

  :hover {
    background-color: #282828;
  }

  .col {
    a {
      display: block;
      width: max-content;
      cursor: pointer;

      :hover {
        color: gainsboro;
      }
    }
  }
`;
