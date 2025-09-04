import React, { useState } from "react";

function Todolist(){
   const [tasks, settasks] = useState([]);
   const [newtask, setnewtask] = useState("");

   function inputtask(event){
      setnewtask(event.target.value);
   }
   function addtask(){
      setnewtask("")
      settasks([...tasks,newtask]);
   }
   function deletetask(i){
    settasks(tasks.filter((_,index) => i != index))
   }
 function movetaskup(index) {
  if (index <= 0) return;

  const updatedTasks = [...tasks]; 
  const temp = updatedTasks[index - 1];
  updatedTasks[index - 1] = updatedTasks[index];
  updatedTasks[index] = temp;

  settasks(updatedTasks); 
}
function movetaskdown(index) {
  if (index >= tasks.length - 1) return;

  const updatedTasks = [...tasks];
  const temp = updatedTasks[index + 1];
  updatedTasks[index + 1] = updatedTasks[index];
  updatedTasks[index] = temp;

  settasks(updatedTasks);
}

    return(
       <div className="to-do-list">
        <h1>Just do it  </h1>
        <div>
          <input type="text" placeholder="type your task..." value={newtask} 
          onChange={inputtask} className="inputtask"/>
           <button  className="add-button" onClick={addtask}> Add </button>
           </div>
           <div className="list">
           <ol>
              {tasks.map((task, index) => 
              <li key={index}>
                <span className="text"> {task}</span>
                <button onClick={() => deletetask(index)} className="delete-button">Delete</button>
                 <button onClick={() => movetaskup(index)} className="move-button">👆</button>
                 <button onClick={() => movetaskdown(index)} className="move-button">👇</button>
              </li>)}

           </ol>
           </div>
       </div>
    );
}
export default Todolist