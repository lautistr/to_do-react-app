import React from 'react';
import './styles.css';

function ToDoForm({ toggleToDosModalOpener, createToDo, rols }) {
    const [ newToDoText, setNewToDoText ] = React.useState('');
    const [ rolValue, setRolValue ] = React.useState(rols[0]);
    
    const onTaskChange = (event) => {
        setNewToDoText(event.target.value);
    }
    const onRolChange = (event) => {
        setRolValue(event.target.value);
        console.log(event.target.value);
    }

    const onCreate = (event) => {
        event.preventDefault();
        createToDo(newToDoText, rolValue)
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
                onChange={onTaskChange}
                placeholder='You are gonna crush it today!'
            />
            <select className="TodoForm-select" onChange={(e) => onRolChange(e)}>
                {rols.map(rol => (
                    <option 
                        key={`${rol}`} 
                        value={`${rol}`}
                    >
                        {rol}
                    </option>
                ))
                }
            </select>
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