import  imageRickMorty from "./img/rick-morty.png";
import './App.css';
import {useState} from "react";
import Characters from "./components/Characters";

function App() {
  const [characters,setCharacters]=useState(null);
  const reqApi=async()=>{
    const api=await fetch("https://rickandmortyapi.com/api/character")
    const characterApi=await api.json();
    setCharacters(characterApi.results);
    //console.log(characters);
   // console.log("clicking");
  };
  return (
    <div className="App">
      <header className="App-header">
      
        <h1 className="title">Rick y Morty</h1>
       
        {characters ? (
       /*{filtramos si la constante characters tiene datos vamos a mostrarlo y si no tiene datos no lo muestre.
         se va a hacer por medio de los ternarios}*/
        <Characters characters={characters}setCharacters={setCharacters} />
        ) : (
       <>
        
      <img src={imageRickMorty}alt="Rick y Morty"className="img-home"></img>
        <button onClick={reqApi}className="btn-search">Buscar Personajes</button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
