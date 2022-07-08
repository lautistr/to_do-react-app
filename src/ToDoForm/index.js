import React from 'react';
import './styles.css';

function ToDoForm({ toggleToDosModalOpener, createToDo }) {
    const [ newToDoText, setNewToDoText ] = React.useState('');

    const onChange = (event) => {
        setNewToDoText(event.target.value);
    }

    const onCreate = (event) => {
        event.preventDefault();
        createToDo(newToDoText)
        toggleToDosModalOpener(false)
    }

    const onCancel = () => {
        toggleToDosModalOpener(false)
    }

    return (
        <form onSubmit={onCreate}>
            <label>
                Create your task
            </label>
            <textarea
                value={newToDoText}
                onChange={onChange}
                placeholder='You are gonna crush it today!'
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type='button'
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button 
                    type='submit'
                    className="TodoForm-button TodoForm-button-add"
                >
                    Create
                </button>
            </div>
        </form>
    )
}

export { ToDoForm };