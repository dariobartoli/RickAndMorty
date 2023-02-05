import React from "react";
import { useState } from "react";
import '../assets/styles/formCreate.css'

export const CreateCharacter = ({createCard} ) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")
  const [status, setStatus] = useState("")
  const [show, setShow] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "" && gender === ""){
        alert("llenar datos")
    }else{
        createCard(name, gender, status, species);
        setName("");
        setGender("")
        setSpecies("")
        setStatus("")
        setShow(!show);
    }
  };

  const openModal = ()=>{
    setShow(!show);
  }

  const closeModal = ()=>{
    setShow(!show);
  }

  return (
    <div>
      <button onClick={openModal} className="buttonCreate">Create new character</button>
      <div className={`modal ${show ? '' : 'modalShow'}`}>
        <div  className="modalContainer">
          <span className="material-symbols-outlined close" onClick={closeModal}>close</span>
          <form onSubmit={handleSubmit} className="formContainer">
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} required className="input"/>
            <select name="" id="" onChange={(e) => setGender(e.target.value)} required className="input">
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <select name="" id="" onChange={(e) => setSpecies(e.target.value)} required className="input">
                <option value="">Select status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="Unknown">Unknown</option>
            </select>
            <select name="" id="" onChange={(e) => setStatus(e.target.value)} required className="input">
                <option value="">Select species</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
            </select>
            <button className="buttonCreate2">Create</button>
          </form>
        </div>

      </div>
    </div>
  );
};
