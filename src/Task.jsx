import React from 'react';

function Task(props){
    function removeIt(){
        props.remove(props.index);
    }
    return(
    <>
        <li className = "todo">
            <h5 id = "text">{props.text}</h5>
            <button id = "rembtn" onClick = {removeIt}>Remove</button>
        </li>
    </>)
}

export default Task;