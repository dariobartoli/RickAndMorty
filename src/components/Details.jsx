import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../assets/styles/details.css'

export const Details = () => {
  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [location, setLocation] = useState("");
  const { id } = useParams();

  /*     useEffect(() => {
        setCharacter(data.find(pj =>pj.id === parseInt(id)))
    }, [id]) */
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character").then((response) =>
      response.json().then((res) => {
        let data = res.results;
        let charac = data.find((pj) => pj.id === parseInt(id));
        setCharacter(data.find((pj) => pj.id === parseInt(id)));
        setEpisodes(charac.episode);
        setLocation(charac.location.name);
      })
    );
  }, [id]);


  return (
    <div>
      <div className="mainDetails">
        <div className="mainDetailsC">
          <h2 className="tituloDetails">{character.name}</h2>
          <div className="infoDetails">
            <img src={character.image} className="imageDetails"/>
            <div className="textoDetails">
              <div>
                <h4 className="title">Created</h4>
                <p>{character.created}</p>
              </div>
              <div>
                <h4 className="title">Species</h4>
                <p>{character.species}</p>
              </div>
              <div>
                <h4 className="title">Status</h4>
                <p>{character.status}</p>
              </div>
              <div>
                <h4 className="title">Location</h4>
                <p>{location}</p>
              </div>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr> 
                <th className="thead">Episodes</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((a, i) => (
                <tr key={i}>
                  <td className="td">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={"/characters"}>
            <button className="buttonD">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
