import React from "react";
import { CardCharacters } from "./CardCharacters";
import { CreateCharacter } from "./CreateCharacter";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import "../assets/styles/character.css";
import Footer from "./Footer";

export const Characters = ({ data, deleteCard, createCard, check }) => {
  const [checkSpecies, setCheckSpecies] = useState({
    human: false,
    alien: false,
  })
  const [datosFiltrados, setDatosFiltrados] = useState([])

  const handleOnCheckbox= (e) =>{
    setCheckSpecies({
      ...checkSpecies,
      [e.target.value]: e.target.checked
    });

    if(e.target.checked){
      const resultadoCheck = data.filter(item => item.species === e.target.value)
      setDatosFiltrados([
        ...datosFiltrados,
        ...resultadoCheck
      ])
    }else{
      const resultadoCheck = datosFiltrados.filter(item => item.species !== e.target.value)
      setDatosFiltrados([...resultadoCheck])
    }
  }



  return (
    <div>
      <Header />
      <div className="mainC">
        <div className="mainContainerC">
          <h1 className="tituloCharacter">Characters</h1>
          <div className="checkContainer">{check.map(item => (
            <div key={item}>
              <input type="checkbox" value={item} name="species" id={item} onChange={handleOnCheckbox} className="inputCheck"/>
              <label htmlFor={item} className="checkLabel">{item}</label>
            </div>
          ))}</div>
          <CreateCharacter createCard={createCard}/>
          <CardCharacters data={datosFiltrados} deleteCard={deleteCard} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
