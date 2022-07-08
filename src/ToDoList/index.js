import React from "react";
import './styles.css';

function ToDoList(props) {
    return (
        <section className="ToDoList">
            <h3 className="ToDoList-Title">TODAY'S TASKS</h3>
            <ul className="ToDoList-TasksContainer">
                {props.children}
            </ul>
        </section>
    )
}

export { ToDoList };