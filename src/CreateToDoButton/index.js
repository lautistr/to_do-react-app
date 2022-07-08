import React from "react";
import './styles.css';

function CreateToDoButton(props) {
    const onClickButton = () => {
        props.toggleToDosModalOpener(!props.toDosModalOpener);
    }
    
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateToDoButton };