import React from "react";

function ToDoList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export { ToDoList };