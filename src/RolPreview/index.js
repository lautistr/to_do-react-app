import React from 'react';
import { ProgressBar } from '../ProgressBar';

import './styles.css';

function RolPreview () {
    return (
        <article className='RolPreview'>
            <span className='RolPreview-Tasks'>12 tasks</span>
            <p className='RolPreview-Title'>Student</p>
            <ProgressBar completed={65}/>
        </article>
    )
}

export { RolPreview };