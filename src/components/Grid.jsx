import React from 'react'

const numRows=30;
const numColumns=30;

function Grid() {
    const rows=[];
    for(let i=0;i<numRows;i++){
        rows.push(Array.from(Array(numColumns),()=>0))
     }
     console.log(rows)
    return (
        <>
            <p>Create a Grid</p>
            <div>
                
            </div>
        </>
    )
}
export default Grid;