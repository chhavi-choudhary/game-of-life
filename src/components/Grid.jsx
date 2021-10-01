import React, { useState } from 'react';
import produce from 'immer';
import '../style.css';


function Grid({gridStr}) {
const [grid, setGrid]=useState(gridStr)

const changeColor = (e)=>{
    setGrid(e.target.value)
}

    return (
        <div >
            <h2>Create a Grid</h2>
            <div style={{display:"grid",
        gridTemplateColumns:`repeat(30, 20px)`}} className="disp">  
                {grid.map((rows, i)=>
                rows.map((columns, j)=>
                <div className="gridstr" key={`${i}-${j}`}
                onClick={()=>{
                    const newGrid=produce(grid, gridCopy=>{
                        gridCopy[i][j]=1;
                    })
                    setGrid(newGrid);
                }}
                style={{
                    backgroundColor:grid[i][j]?"black":undefined
                }}
             ></div>))}
            </div>
        </div>
    )
}
export default Grid;