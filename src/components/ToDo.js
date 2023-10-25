import React, { useState } from "react";
 
const ToDo = () =>{
    const[todo,setTodo] = useState([]);
  
    return(
       <div>
           <h1>My ToDos</h1>
           <ul>
            {
                todo.map((ele,idx)=>(
                    <li id={`todo-${idx}`}>{ele}</li>
                ))
            }
           </ul>
           <button id="add-todo-btn" onClick={()=>setTodo([...todo,"New Todo"])}>Add Todo</button>
       </div>
    )
}
 
export default ToDo;