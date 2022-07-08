import React from "react";
import './styles.css';

function ToDoItem(props) {
    return (
        <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                {/* ✓ */}
            </span>
            <p className="TodoItem-p">{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                >
                X
            </span>
        </li>
    )
}

export { ToDoItem };