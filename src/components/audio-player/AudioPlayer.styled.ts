import styled from "styled-components";

export const StyledAudioPlayer = styled.div`
  position: fixed;
  z-index: 99999;
  height: ${(props: any) =>
    props.displayAudioPlayer === true ? "100vh" : "115px"};
  width: 100%;
  background-color: #000;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
  transition: 0.5s ease;

  .active-link {
    color: #1cdf63;
  }

  .nav {
    height: 80px;
    width: 95%;
    margin: auto;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-weight: 600;
      font-size: 1.5rem;
    }

    .row {
      gap: 2rem;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      border: 2px gainsboro solid;
    }
  }

  .main-info {
    width: 90%;
    margin: 2rem auto;
    gap: 1rem;

    /* sussy */
    min-height: 72vh;

    .big-img {
      height: 90%;
      width: 600px;
      margin: auto 0;
      background-color: #181818;
    }

    .lyr-rel {
      margin: 0 auto;
      width: 50%;
      display: flex;
      align-items: center;

      .row {
        gap: 3rem;
        padding-bottom: 10px;
        margin-bottom: 1rem;
        align-items: center;

        .active-btn {
          padding: 20px;
          border: 2px #282828 solid;
          border-radius: 30px;
        }
      }
    }
  }

  .audio-player-container {
    width: 100%;
    background: #181818;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-top: 2px #282828 solid;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      width: max-content;
    }

    .thumbnail-img {
      width: 65px;
      height: 65px;
      border-radius: 5px;
      background-color: #000;
    }

    .slide {
      font-size: 1.5rem;
      .slide-bar {
        width: 500px;
        background-color: #282828;
        border-radius: 5px;
        height: 5px;

        :hover {
          .snake {
            background-color: #1cdf63;
          }
        }

        .snake {
          height: 100%;
          background-color: #fff;
          border-radius: 5px;
          position: relative;

          :hover {
            ::before {
              display: block;
            }
          }

          ::before {
            position: absolute;
            content: "";
            right: 0;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #fff;
            margin: auto;
            vertical-align: middle;
            top: 50%;
            transform: translateY(-50%);
            cursor: grab;
            display: none;
          }
        }
      }
    }
  }
`;
