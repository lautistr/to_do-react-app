import React from 'react';
import './styles.css';

function RolForm({ toggleRolsModalOpener, createRol }) {
    const [ newRolText, setNewRolText ] = React.useState('');

    const onChange = (event) => {
        setNewRolText(event.target.value);
    }

    const onCreate = (event) => {
        event.preventDefault();
        createRol(newRolText)
        toggleRolsModalOpener(false)
    }

    const onCancel = () => {
        toggleRolsModalOpener(false)
    }

    return (
        <form onSubmit={onCreate}>
            <label>
                Create your rol
            </label>
            <textarea
                value={newRolText}
                onChange={onChange}
                placeholder='A balanced life is a happy life!'
            />
            <div className="RolForm-buttonContainer">
                <button 
                    type='button'
                    className="RolForm-button RolForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button 
                    type='submit'
                    className="RolForm-button RolForm-button-add"
                >
                    Create
                </button>
            </div>
        </form>
    )
}

export { RolForm };