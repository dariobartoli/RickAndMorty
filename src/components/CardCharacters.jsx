import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/card.css'

export const CardCharacters = ({ data, deleteCard }) => {

  
  return (
    <>
      <div className="cardContainer">
        {data.map((personaje) => (
          <div key={personaje.id} className="card">
            <img src={personaje.image} className="imageCard"/>
            <div className="cardText">
              <h2>{personaje.name}</h2>
              <p>Gender: {personaje.gender}</p>
              <p>Species: {personaje.species}</p>
              <p>Status: {personaje.status}</p>
              <div className="botones">
                <Link to={`/characters/${personaje.id}`}>
                  <button className="buttonDetails">Details</button>
                </Link>
                <button onClick={() => deleteCard(personaje.id)} className="buttonDelete">Delete Character</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
