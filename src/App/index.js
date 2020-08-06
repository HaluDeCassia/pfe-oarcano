import React from 'react';
import Form from '../components/Form';
import Game from '../components/Game';
import Header from '../components/Header';

import { AppStyle } from "./styles";

import logo from '../assets/logo.svg';

export default function App() {
  const [hasGameData, setHasGameData] = React.useState(false);

  React.useEffect(() => setHasGameData(localStorage.getItem('@oarcano/gameData') || false), [hasGameData])

  return (
    <AppStyle className="app">
      <Header title='Ficha do personagem' logo={logo} />
      <main className="app__main">
        {hasGameData ? <Game /> : <Form setHasGameData={setHasGameData} />}
      </main>
    </AppStyle>
  );
}
