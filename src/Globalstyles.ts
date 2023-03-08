import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-color: #121212;
    color:  #fff;
    transition: 0.5s ease;
    margin: 0;
    overflow: hidden;
  }

  .App {
    position: relative;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  ul li {
    list-style: none;
  }

  input {
    outline: none;
  }

  .row {
    display: flex;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

   .center {
    align-items: center;
  }

  .center-js {
    justify-content: center;
  }

  .btw {
    justify-content: space-between;
  }

  .start {
    align-items: flex-start;
  }

  .gap-1 {
    gap: 1rem;
  }

  .gap-5 {
    gap: .5rem;
  }

  .grid-center {
    display: grid;
    place-content: center;
  }

  .pointer {
    cursor: pointer;
  }

  .cap {
    text-transform: capitalize;
  }

  .none {
    display: none;
  }

  .img-def {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .avatar {
 /* From https://css.glass */
   background-color: rgba(255, 255, 255, 0.2);
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
}
  
  @media screen and (-webkit-min-device-pixel-ratio:0) { 
  select,
  textarea,
  input {
    font-size: 16px;
  }
}
`;
export default GlobalStyle;
