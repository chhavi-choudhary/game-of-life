import React, { useState } from 'react';
import Grid from './components/Grid';
import './style.css';



const numRows=30;
const numColumns=30;
const rows=[];
const initialGrid=(numRows, numColumns)=>{
   for(let i=0;i<numRows;i++){
        rows.push(Array.from(Array(numColumns),()=>0))
    }
     return rows;
}
initialGrid(numRows, numColumns);



function App() {
  const[generation, setGeneration]=useState(0)
  return (
    <div className="App">
     <h1>Conway's Game Of Life !!</h1>
    <Grid gridStr={initialGrid()}/>
    <h2>Generations:{generation}</h2>
    </div>
    
  );
}

export default App;
