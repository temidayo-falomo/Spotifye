import styled from "styled-components";

export const StyledLogin = styled.div`
  height: 100vh;
  background-color: #fff;
  color: #000;
  overflow-y: scroll !important;

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
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .box {
      width: 450px;
      border: 1px gainsboro solid;
      border-radius: 5px;
      padding: 30px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 4rem;

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
        font-size: 0.9rem;
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      .google {
        border: 2px black solid;
        color: #000;
        width: 85%;
        background-color: transparent;

        :hover {
          border: 2px royalblue solid;
          color: royalblue;
        }
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

    .row {
      width: 100%;
      border: 1px gainsboro solid;
      padding: 10px;
      position: relative;
      border-radius: 5px;

      .notif {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px 10px;
        font-size: 0.7rem;
        color: white;
        background-color: #181818;
        border-radius: 5px;
        cursor: pointer;
        min-width: 100px;

        :hover {
          background-color: transparent;
          border: 1px black solid;
          color: black;
        }
      }
    }

    .btw {
      display: flex;
      flex-direction: row;
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
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

  a {
    width: max-content;
  }

  .ghost {
    width: 20px !important;
  }

  @media (max-width: 500px) {
    .login-container {
      margin-top: 2rem;

      .box {
        width: 90%;
        padding: 20px;

        .notif {
          position: relative;
          font-size: 0.5rem;
        }
      }
    }
  }
`;
