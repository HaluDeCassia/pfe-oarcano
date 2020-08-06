import React from 'react';

import { GameStyle } from "./styles";
import { Button } from "../../App/styles";

import Dices from '../../assets/dices.svg';

const GENDER = {
  male: 'Homem',
  female: 'Mulher',
  androgynous: 'Andrógino',
  "no-gender": 'Sem gênero'
}

const EYES = {
  'fierce-eyes': 'Olhos ferozes',
  'dark-eyes': 'Olhos sombrios',
  'tired-eyes': 'Olhos cansados',
  'sparkling-eyes': 'Olhos faiscantes'
}

const CLOTHES = {
  'crumpled-clothes': 'Roupas amarrotadas',
  'stylish-clothes': 'Roupas estilosas',
  'gothic-clothes': 'Roupas góticas',
  'old-fashioned-clothes': 'Roupas antiquadas'
}

export default function Game() {
  const [dice, setDice] = React.useState(0);
  const [level, setLevel] = React.useState(0);
  const [proname, setProname] = React.useState('');
  const [initialScore, setInitialScore] = React.useState({
    bravery: 0,
    cunning: 0, 
    strangeness: 0, 
    firmness: 0, 
    subtlety: 0
  });
  const [gameData, setGameData] = React.useState({});

  function rollDice() {
    let count = 0;
    
    let animate = setInterval(() => {
      count += 1;
      var rolling = Math.floor(1 + Math.random() * 20);
      document.getElementById("dice").innerHTML = rolling;

      if(count === 20) {
        clearInterval(animate);
        setDice(document.getElementById("dice").textContent)
        if(document.getElementById("dice").textContent<= 6) {
          setLevel(level+1)
          setGameData(prevState => ({ ...prevState, level: level+1 })); 
          localStorage.setItem('@oarcano/gameData', JSON.stringify(gameData));
        }
      }
    }, 100);
  }

  function clearDashboard() {
    localStorage.removeItem('@oarcano/gameData');
    window.location.href = '/';
  }

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('@oarcano/gameData'));
    if(data) {
      setGameData(data);
      setLevel(data.level);
  
      switch (data.gender) {
        case 'male':
          setProname('o arcano');
          break;
        case 'female':
          setProname('a arcana');
          break;
        default:
          setProname('u arcanu');
          break;
      }
  
      switch (data.initialScore) {
        case 'op1':
          setInitialScore(() => ({
            bravery: 0,
            cunning: 1, 
            strangeness: 2, 
            firmness: 1, 
            subtlety: -1
          })); 
          break;
        case 'op2':
          setInitialScore(() => ({
            bravery: 1,
            cunning: 1, 
            strangeness: 2, 
            firmness: -1, 
            subtlety: 0
          })); 
          break;
        case 'op3':
          setInitialScore(() => ({
            bravery: -1,
            cunning: 2, 
            strangeness: 2, 
            firmness: 0, 
            subtlety: -1
          })); 
          break;
        case 'op4':
          setInitialScore(() => ({
            bravery: -1,
            cunning: 1, 
            strangeness: 2, 
            firmness: 0, 
            subtlety: 1
          })); 
          break;
        case 'op5':
          setInitialScore(() => ({
            bravery: 0,
            cunning: 1, 
            strangeness: 2, 
            firmness: 0, 
            subtlety: 0
          }));
          break;
        default:
          setInitialScore(() => ({
            bravery: 0,
            cunning: 0, 
            strangeness: 0, 
            firmness: 0, 
            subtlety: 0
          }));
          break;
      }
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('@oarcano/gameData', JSON.stringify(gameData));
  }, [gameData]);   

  return (
    <GameStyle className='dashboard'>
      <div className='dashboard__dice'>
        <div id="dice" className="dashboard__dice__number">{dice || 1}</div>
        <img src={Dices} alt="dados" className="dashboard__dice__img" />
        <button className="dashboard__dice__button" onClick={rollDice}>
          rolar dado
        </button>
        <div className="dashboard__dice__action">
        </div>
      </div>
      
      <div className='dashboard__info'>
        <div classsName="dashboard__info__level" title={`nível ${gameData.level}`}>{gameData.level}</div>
        <h1 className='dashboard__info--primary'>
          {gameData.charName}, {proname} 
        </h1>
        <p className='dashboard__info--second'>
          <b>Aparência: </b> {GENDER[gameData.gender]}, {EYES[gameData.eyes]}, {CLOTHES[gameData.clothes]}
        </p>
      </div>

      <div className="dashboard__atributes">
        <h3 className="dashboard__atributes__score">
          {initialScore.bravery} <br />
          <small>Braveza</small>
        </h3>
        <h3 className="dashboard__atributes__score">
          {initialScore.cunning} <br />
          <small>Esperteza</small>
        </h3>
      </div>
      <div className="dashboard__atributes">
        <h3 className="dashboard__atributes__score">
          {initialScore.strangeness} <br />
          <small>Estranheza</small>
        </h3>
        <h3 className="dashboard__atributes__score">
          {initialScore.firmness} <br />
          <small>Firmeza</small>
        </h3>
      </div>
      <div className="dashboard__atributes">
        <h3 className="dashboard__atributes__score">
          {initialScore.subtlety} <br />
          <small>Sutileza</small>
        </h3>
      </div>
      <Button className="action-button" onClick={() => clearDashboard()}>Limpar ficha</Button>
    </GameStyle>
  );
}
