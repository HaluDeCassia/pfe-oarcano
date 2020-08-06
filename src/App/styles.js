import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  font-family: 'Recursive', sans-serif;
  background-image: linear-gradient(#412a2b, #372d2d);
  
  &.app {
    text-align: center;

    .app__main {
      color: white;
    }
  }
`;

export const Button = styled.button`
  &.action-button {
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    margin: 40px auto;
    shadow: 0 0 60px black;
    background-color: brown;
    font-family: 'Rowdies', cursive;
  }
`;