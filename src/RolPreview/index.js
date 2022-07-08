import React from 'react';
import { ProgressBar } from '../ProgressBar';

import './styles.css';

// {tasksNumber, tasksOrRols, rolTitle, completed, rolsModalOpener, toggleRolsModalOpener}

function RolPreview (props) {
    return (
        <article className='RolPreview' onClick={props.onClick}>
            <span className='RolPreview-Tasks'>{props.tasksNumber} {props.tasksOrRols}</span>
            <p className='RolPreview-Title'>{props.rolTitle}</p>
            <ProgressBar completed={props.completed}/>
        </article>
    )
}

export { RolPreview };