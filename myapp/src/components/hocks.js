import React, { useState } from "react";
function Hocks(){
    const[count,setCount]=useState(0);

    return(
        <div>
        <h1>hooks topic</h1>
        {count}
        <br></br>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <br></br>
       
        </div>
    )

}
export default Hocks