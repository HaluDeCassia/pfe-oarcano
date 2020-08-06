import styled from "styled-components";

export const FormStyle = styled.form`
  &.form {
    .form__input-label {
      margin: 10px;
    }

    .form__input-field {
      width: 85vw;
      color: white;
      border: none;
      padding: 9px 10px;
      text-align: center;
      background-color: #00000029;
    }

    .form__radio {
      .form__radio--grouping {
        margin: 15px;
        display: flex;
        font-size: 1rem;
        justify-content: center;

        .form__radio__group {
          margin: 0 auto;
          max-width: 160px;
          text-align: left;
        }

        @media(max-width: 800px) {
          flex-direction: column;
          position: relative;

          .form__radio__group {
            max-width: 100%;
            text-align: center;
          }
        }
      }

      .form__radio__title {
        margin-bottom: 8px;
      }

      .form__radio--only {
        margin: 10px;
        font-size: 1rem;
      }
    }
  }
`;
