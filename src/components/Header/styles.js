import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  color: white;
  height: 4rem;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  background-color: #412a2b;

  &.menu {
    justify-content: center;

    .menu__logo {
      width: 40px;
      height: auto;
    }

    .menu__title { 
      margin: auto 15px;
    }
  }
`;
