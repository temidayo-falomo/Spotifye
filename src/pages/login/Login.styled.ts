import styled from "styled-components";

export const StyledLogin = styled.div`
  height: 100vh;
  background-color: #fff;
  color: #000;

  a {
    font-size: 0.8rem;
    color: royalblue;
  }

  .login-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    /* border-bottom: 1px gainsboro solid; */
    padding: 20px;

    h2 {
      text-align: center;
      font-size: 2.2rem;
    }
  }

  .sign-p {
    text-align: center;
    font-weight: 800;
    font-size: 2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .login-container {
    height: 70vh;
    margin-top: 1rem;
    display: grid;
    place-content: center;

    .box {
      max-height: 600px;
      width: 450px;
      min-width: 300px;
      border: 1px gainsboro solid;
      border-radius: 5px;
      padding: 30px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      .line-row {
        width: 100%;

        .line {
          border: 1px gainsboro solid;
          width: 100%;
        }
      }

      button {
        padding: 12px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 1rem;
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      .google {
        border: 2px black solid;
        color: #000;
        width: 90%;
        background-color: transparent;
      }

      .spotify {
        /* background-color: #1db954; */
        color: #fff;
        width: 90%;
      }
    }
  }

  form {
    width: 100%;
    input {
      border: 1px gainsboro solid;
      padding: 10px;
      width: 100%;
    }

    .sign-in-btn {
      background-color: royalblue;
      align-self: center;
      border-radius: 5px !important;
      padding: 10px 15px !important;
      font-size: 0.8rem !important;
      color: #fff;
    }
  }
`;
