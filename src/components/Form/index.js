import React from 'react';

import { FormStyle } from "./styles";
import { Button } from "../../App/styles";

export default function Form(props) {
  const [gameData, setGameData] = React.useState({
    charName: '',
    gender: '',
    eyes: '',
    clothes: '',
    initialScore: '',
    level: 1
  });

  function onChange(event) {
    const { name, value } = event.target;
    setGameData(prevState => ({ ...prevState, [name]: value })); 
  }

  function persistGameData(){
    console.log(gameData);
    localStorage.setItem('@oarcano/gameData', JSON.stringify(gameData));
    props.setHasGameData(true);
  }

  return (
    <FormStyle className="form">
      <div>
        <h3 className='form__input-label'>Nome</h3>
        <input
          placeholder="Ex: Calista"
          className='form__input-field'
          type="text"
          name="charName"
          value={gameData.charName}
          onChange={onChange}
        />
      </div>
      <div className="form__radio">
        <h3>Aparência</h3>
        <div className="form__radio--grouping">
          <div className="form__radio__group">
            <h4>Gênero</h4>
            <input 
              type="radio" 
              value="male" 
              name="gender"
              checked={gameData.gender === "male"}
              onChange={onChange}
            /> Homem <br />
            <input 
              type="radio"
              value="female"
              name="gender" 
              checked={gameData.gender === "female"}
              onChange={onChange}
            /> Mulher <br />
            <input 
              type="radio"
              value="androgynous"
              name="gender" 
              checked={gameData.gender === "androgynous"}
              onChange={onChange}
            /> Andrógino <br />
            <input 
              type="radio"
              value="no-gender"
              name="gender" 
              checked={gameData.gender === "no-gender"}
              onChange={onChange}
            /> Sem gênero
          </div>
          <div className="form__radio__group">
            <h4>Olhos</h4>
            <input 
              type="radio" 
              value="fierce-eyes" 
              name="eyes"
              checked={gameData.eyes === "fierce-eyes"}
              onChange={onChange}
            /> Olhos ferozes <br />
            <input 
              type="radio"
              value="dark-eyes"
              name="eyes" 
              checked={gameData.eyes === "dark-eyes"}
              onChange={onChange}
            /> Olhos sombrios <br />
            <input 
              type="radio"
              value="tired-eyes"
              name="eyes" 
              checked={gameData.eyes === "tired-eyes"}
              onChange={onChange}
            /> Olhos cansados <br />
            <input 
              type="radio"
              value="sparkling-eyes"
              name="eyes" 
              checked={gameData.eyes === "sparkling-eyes"}
              onChange={onChange}
            /> Olhos faiscantes
          </div>
          <div className="form__radio__group">
            <h4>Roupas</h4>
            <input 
              type="radio" 
              value="crumpled-clothes" 
              name="clothes"
              checked={gameData.clothes === "crumpled-clothes"}
              onChange={onChange}
            /> Roupas amarrotadas <br />
            <input 
              type="radio"
              value="stylish-clothes"
              name="clothes" 
              checked={gameData.clothes === "stylish-clothes"}
              onChange={onChange}
            /> Roupas estilosas <br />
            <input 
              type="radio"
              value="gothic-clothes"
              name="clothes" 
              checked={gameData.clothes === "gothic-clothes"}
              onChange={onChange}
            /> Roupas góticas <br />
            <input 
              type="radio"
              value="old-fashioned-clothes"
              name="clothes" 
              checked={gameData.clothes === "old-fashioned-clothes"}
              onChange={onChange}
            /> Roupas antiquadas
          </div>
        </div>
        <div className="form__radio--only">
          <h3 className="form__radio__title">Classificação</h3>
          <input 
            type="radio" 
            value="op1" 
            name="initialScore"
            checked={gameData.initialScore === "op1"}
            onChange={onChange}
          /> Braveza ±0, Esperteza +1, Estranheza +2, Firmeza +1, Sutileza −1
          <br />
          <input 
            type="radio"
            value="op2"
            name="initialScore" 
            checked={gameData.initialScore === "op2"}
            onChange={onChange}
          /> Braveza +1, Esperteza +1, Estranheza +2, Firmeza −1, Sutileza ±0
          <br />
          <input 
            type="radio"
            value="op3"
            name="initialScore" 
            checked={gameData.initialScore === "op3"}
            onChange={onChange}
          /> Braveza −1, Esperteza +2, Estranheza +2, Firmeza ±0, Sutileza −1
          <br />
          <input
            type="radio"
            value="op4"
            name="initialScore" 
            checked={gameData.initialScore === "op4"}
            onChange={onChange}
          /> Braveza −1, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza +1
          <br />
          <input
            type="radio"
            value="op5"
            name="initialScore" 
            checked={gameData.initialScore === "op5"}
            onChange={onChange}
          /> Braveza ±0, Esperteza +1, Estranheza +2, Firmeza ±0, Sutileza ±0
        </div>
      </div>
      <Button className="action-button" onClick={persistGameData}>Guardar informações</Button>
    </FormStyle>
  );
}
