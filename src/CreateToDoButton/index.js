import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props) {
    const onClickButton = () => {
        props.toggleModalOpener(!props.modalOpener);
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