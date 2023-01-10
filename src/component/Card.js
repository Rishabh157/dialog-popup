import React from 'react'

function Card() {
    return (
        <>
            <div className="overlay">


                <div className="dialog">

                    <div className="dialog__content">
                        <h2 className="dialog__title">Delete a task?</h2>
                        <p className="dialog__description">Are you sure you want to delete this task?</p>
                    </div>

                    <hr />

                    <div className="dialog__footer">
                        <button className="dialog__cancel">Cancel</button>
                        <button className="dialog__confirm">Yes, delete it</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Card