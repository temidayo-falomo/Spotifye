import styled from "styled-components";

export const StyledRelated = styled.div`
  padding: 0 20px;
  margin: 2rem 0;
  margin-top: 4rem;

  h2 {
    font-size: 1.5rem;
  }

  .row.top.btw {
    margin-bottom: 3rem;
  }

  .related_container {
    gap: 2rem;
    justify-content: space-between;
  }

  .related_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    transition: 0.5s ease;

    .image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #000;
      margin: auto;
      align-self: center;
      justify-self: center;
      cursor: pointer;
    }

    h4:hover {
      cursor: pointer;
      color: gainsboro;
    }
  }
`;
