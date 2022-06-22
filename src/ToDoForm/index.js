import React from 'react';

function ToDoForm({ toggleModalOpener, createToDo }) {
    const [ newToDoText, setNewToDoText ] = React.useState('');

    const onChange = (event) => {
        setNewToDoText(event.target.value);
    }

    const onCreate = (event) => {
        event.preventDefault();
        createToDo(newToDoText)
        toggleModalOpener(false)
    }

    const onCancel = () => {
        toggleModalOpener(false)
    }

    return (
        <form onSubmit={onCreate}>
            <label>
                Create your task
            </label>
            <textarea
                value={newToDoText}
                onChange={onChange}
                placeholder='Give this app 5 starts *'
            />
            <div>
                <button 
                    type='button'
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button 
                    type='submit'
                >
                    Create
                </button>
            </div>
        </form>
    )
}

export { ToDoForm };