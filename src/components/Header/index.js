import React, { Suspense } from "react";

import { Nav } from "./styles";

const renderLoader = () => <p>Carregando...</p>;

export default function Header (props) {
  return (
    <Suspense fallback={renderLoader()}>
      <Nav className="menu">
        {props.logo && <img src={props.logo} alt="logo" className="menu__logo" />}
        {props.title && <span className="menu__title">{props.title}</span>}
      </Nav>
    </Suspense>
  );
};
