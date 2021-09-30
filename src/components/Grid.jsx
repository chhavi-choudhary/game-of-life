import React, { useState } from 'react';
import '../style.css';


function Grid({gridStr}) {
const [grid, setGrid]=useState(gridStr)


    return (
        <div >
            <h2>Create a Grid</h2>
            <div style={{display:"grid",
        gridTemplateColumns:`repeat(30, 20px)`}} className="disp">  
                {grid.map((rows, i)=>
                rows.map((columns, j)=><div className="gridstr" key={`${i}-${j}`}></div>))}  
            </div>
        </div>
    )
}
export default Grid;