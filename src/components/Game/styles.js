import styled from "styled-components";

export const GameStyle = styled.div`
  &.dashboard {
    top: 0;
    padding: 0 10px;
    box-shadow: 0 0 -6px gray;

    .dashboard__dice {
      display: flex;
      justify-content: center;

      .dashboard__dice__number {
        font-size: 1.5rem;
        margin-right: 20px;
        font-family: 'Rowdies', cursive;
      }
      
      .dashboard__dice__img {
        width: 25px;
        height: auto;
      }
      
      .dashboard__dice__button {
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        background-color: transparent;
      }
    }

    .dashboard__info {
      margin: 30px auto;

      .dashboard__info__level {
        border-radius: 100%;
        border: 3px solid white;
        font-family: 'Rowdies', cursive;
      }
      
      .dashboard__info--primary {
        margin: 5px;
        font-family: 'Rowdies', cursive;
      }
    }

    .dashboard__atributes {
      display: flex;
      justify-content: center;

      .dashboard__atributes__score {
        margin: 5px;
      }
    }
  }
`;
