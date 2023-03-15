import styled from "styled-components";

export const StyledSongCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;

  :hover {
    background-color: #282828;

    .number {
      display: none;
    }

    .play {
      display: inline-block;
    }
  }

  .play {
    display: none;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .col {
    a {
      width: max-content;

      :hover {
        color: gainsboro;
      }
    }
  }

  @media (max-width: 400px) {
    h4 {
      max-width: 100px;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
