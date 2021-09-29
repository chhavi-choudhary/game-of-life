import React, { useState } from 'react';
import Grid from './components/Grid';
import './style.css';

function App() {
  const[generation, setGeneration]=useState(0)
  return (
    <div className="App">
     <h1>Conway's Game Of Life !!</h1>
    <Grid/>
    <h2>Generations:{generation}</h2>
    </div>
  );
}

export default App;
