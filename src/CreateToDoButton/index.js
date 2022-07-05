import React from "react";
import './styles.css';

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