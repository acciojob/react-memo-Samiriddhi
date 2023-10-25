
 
import React, { useState } from "react";
 
const Counter = () =>{
 
    const[count,setCount] = useState(1000000000);
 
    return(
      <div id="incr-cnt">
      Count : 0<button id="incr-btn" onClick={()=>(setCount(count+1))}>New Todo</button>
      <div id="calc">{count}</div>
     </div>
    )
}
 
export default Counter;