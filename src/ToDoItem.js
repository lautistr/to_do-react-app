import React from "react";

function ToDoItem(props) {
    return (
        <li>
            <span>√</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}

export { ToDoItem };