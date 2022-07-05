import React from "react";
import './styles.css';

function ToDoCounter({ totalToDos, completedToDos }){
    return(
        <h2 className="TodoCounter">
            You have completed {completedToDos} out of {totalToDos} to-do's
        </h2>
    )
}

export { ToDoCounter };