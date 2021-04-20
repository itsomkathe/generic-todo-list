import React, { useState } from 'react';
import Task from './Task';

function App(){
  const[task, setTask] = useState("");
  const[items, setItems] = useState([]);

  function updateTask(event){
    const val = event.target.value;
    setTask(val);
  }

  function updateItems(event){
    setItems((prev)=>{
      return[...prev, task];
    });
  
  }

  function removeItem(index){
    console.log("removing "+ items[index])
    console.log(items);
    setItems((prev)=>{
      const newItems = [...prev];
      newItems.splice(index, 1);
      return newItems;
    });
  }

  return(
    <>
      <div className = "input-field">
        <div id = "input-all">
          <input 
          id = "input"
          type = "text"
          onChange = {updateTask}
          placeholder = "Add Task">
          </input>

          <button id = "sub-button" onClick = {updateItems} type = "submit">Add</button>
        </div>
      </div>

      <div className = "list-class">
        <ul className = "list">
        {
          items.map((val, idx)=>{
            return <Task
              text = {val}
              index = {idx}
              remove = {removeItem}
            />
          })
        }
        </ul>
      </div>

      
    </>
  )
}



export default App;