import React from "react";

function CreateToDoButton() {
    const onClickButton = () => {
        alert('Modal opened');
    }
    
    return (
        <button onClick={onClickButton}>+</button>
    )
}

export { CreateToDoButton };