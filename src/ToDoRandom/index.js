import React from "react";
import './styles.css';

function ToDoRandom({ createToDo, useGetRandomActivity }) {
    const {
        randomActivity,  
        getRandomActivity
    } = useGetRandomActivity();

    const onCreate = (event) => {
        event.preventDefault();
        createToDo(randomActivity.item);
    }


    return (
        
        <section className="ToDoRandom">
            <h3>
                Bored and don't know what to do?
                Hit the button!
            </h3>
            <form onSubmit={onCreate}>
                {randomActivity &&
                    <li>
                        <p>{randomActivity.item}</p>
                    </li>}
                <div>
                    <button 
                        type='button'
                        onClick={() => getRandomActivity()}
                    >
                        Get a fun activity!
                    </button>
                    {randomActivity && 
                        <button type='submit'>
                            Add it to my to-do's
                        </button>}
                </div>
            </form>
        </section>
    )
}

export { ToDoRandom };