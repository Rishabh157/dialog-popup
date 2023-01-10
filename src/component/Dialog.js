import React from 'react'

function Dialog({ show, confirm, component }) {
    if (!show) {
        return <></>;
    }

    return (
        <div className="overlay">
            <div className="dialog">
                {component}
                
                <span
                    onClick={confirm}
                    className='cross'>
                    X
                </span>
            </div>
        </div>
    )
}

export default Dialog