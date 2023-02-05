import './App.css'
import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Index } from "./components/Index";
import { Details } from "./components/Details";
import { Shop } from "./components/Shop";
import { Gallery } from './components/Gallery';

function App() {
  const [data, setData] = useState([])
  const [check, setCheck] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json()
    .then(res =>{
      setData(res.results)
      let resultado = res.results
      let categorias = []
      let filtrocategorias = resultado.forEach(item => !categorias.includes(item.species)? categorias.push(item.species): "");
      setCheck(categorias)
    }))
    
  }, [])


  function createCard(cardName, cardGender, cardSpecies, cardStatus){
    setData([...data, {
      name: cardName,
      id: data.length + 1,
      gender: cardGender,
      status: cardStatus,
      species: cardSpecies,
      image: "assets/image/19.jpeg"
    }])
  }

  function deleteCard(id){
    setData(data.filter(dat => dat.id !== id))
  }
  
  


  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Index/>}></Route>
        <Route path="/characters" element={<Characters data={data} deleteCard={deleteCard} createCard={createCard} check={check}/>}></Route>
        <Route path="/characters/:id" element={<Details data={data}/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
