import React from "react";
import './styles.css';

import { ToDoLoader } from '../ToDoLoader';

function ToDoRandom({ createToDo, useGetRandomActivity }) {

    const {
        randomActivity,  
        getRandomActivity,
        loading,
        setLoading
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
                { loading 
                    ? <li> <p>{<ToDoLoader/>}</p> </li>
                    : (randomActivity) && <li> <p>{randomActivity.item}</p> </li>
                }
                <div>
                    <button 
                        type='button'
                        onClick={() => {
                            setLoading(true)
                            getRandomActivity()
                        }}
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