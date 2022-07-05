import React from "react";
import './styles.css';

function ToDoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { ToDoList };