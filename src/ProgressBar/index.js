import React from 'react';

import './styles.css';

function ProgressBar ({completed}) {
    const fillerProgress = {
        width: `${completed}%`,
        borderRadius: '2px'
    }
    const fillerTop = {
        left: `${completed-2}px`,
        borderRadius: '2px'
    }
    console.log(completed)
    return (
        <div className='ProgressBar-Container'>
            <div className='ProgressBar-Filler' style={fillerProgress}>
                <div className='ProgressBar-FillerTop' style={fillerTop}></div>
            </div>
        </div>
    )
}

export { ProgressBar };