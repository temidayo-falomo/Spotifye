import styled from "styled-components";

export const StyledPopular = styled.div`
  padding: 0 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .popular-col {
    gap: 1.5rem;
    align-items: center;

    .popular-card {
      width: 98%;
      padding: 15px 20px;

      :hover {
        background-color: #282828;
      }

      .init-row {
        align-items: center;
        text-align: center;
      }

      .artist-img {
        height: 40px;
        width: 40px;
        background-color: #1cdf63;
        border-radius: 10px;
      }

      /* height: 70px; */
      /* border: 2px white solid; */
      border-radius: 10px;
      align-items: center;
    }
  }
`;
