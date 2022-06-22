import React from "react";

function ToDoCounter({ totalToDos, completedToDos }){
    return(
        <h2>You have completed {completedToDos} out of {totalToDos} to-do's</h2>
    )
}

export { ToDoCounter };