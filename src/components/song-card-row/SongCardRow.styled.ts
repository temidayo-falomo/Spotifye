import styled from "styled-components";

export const StyledSongCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #282828 !important;
    transform: translateX(5px);

    .number {
      display: none;
    }

    .play {
      display: inline-block;
      opacity: 1;
      transform: scale(1);
    }
  }

  .play {
    display: none;
    cursor: pointer;
    font-size: 0.9rem;
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #1db954;
      transform: scale(1.1);
    }
  }

  .col {
    a {
      width: max-content;
      text-decoration: none;
      color: #b3b3b3;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }

  .duration {
    color: #b3b3b3;
    font-size: 0.9rem;
  }

  .number {
    transition: opacity 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;

    h4 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 400px) {
    h4 {
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .duration {
      font-size: 0.8rem;
    }
  }
`;
