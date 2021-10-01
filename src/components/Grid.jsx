import React, { useState, useRef } from 'react';
import produce from 'immer';
import '../style.css';


function Grid({gridStr}) {
const [grid, setGrid]=useState(gridStr)
const[start, setStart]=useState(false);

const startRef=useRef(start);
startRef.current=start;

const handleOnStart=(()=>{
    if(!startRef.current){
        return;
    }
    setTimeout(start, 1000);
},[]);

//neighbours.forEach(([a, b])=>{
    //let newI=i+a;
    //let newJ=j+b;
//})
//const neighbours=[[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1],[1,0][-1,0]];
//if(neighbours<2 || neighbours>3){
    //gridCopy[i][k]=false;
//}

    



return (
        <>
        <div>
        <button onClick={()=>{
            setStart(!start)
        }} className="startBtn">{start?"Pause":"Start"} </button>
        </div>
        <button className="reset">Reset</button>
            <div className="structure">
                    <div style={{display:"grid",
                     gridTemplateColumns:`repeat(30, 20px)`}} className="disp">  
                    {grid.map((rows, i)=>
                    rows.map((columns, j)=>
                        <div className="gridstr" key={`${i}-${j}`}
                      onClick={()=>{
                      const newGrid=produce(grid, gridCopy=>{
                        gridCopy[i][j]=grid[i][j]?false:true;
                      })
                      setGrid(newGrid);
                      }}
                      style={{
                      backgroundColor:grid[i][j]?"black":undefined
                      }}>
                        </div>))}
                    </div>
            </div>
        </>
    )
}
export default Grid;
