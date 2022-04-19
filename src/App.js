import React, { useState, useEffect } from 'react';
import './App.css';
import Gallery from './Gallery';
import Buttons from './Buttons';

function App() {
  let[artId, setArtId] = useState(12720)
  let[data, setData] = useState({})

  useEffect(() => {
    document.title = "Welcome to Artworld"
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(formattedData => setData(formattedData) )
  },[artId])

  const handleIterate =(number) =>{
    setArtId(artId + number)
  }

  return (
    <div className="App">
      <Gallery  objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} /> 
      <Buttons handleIterate ={handleIterate} />
    </div>
  );
}

export default App;
