import React from "react"
import "./styles.css"

const Forms = () => {
    return (
        <div className='row h-100 pt-5'>
            <div className='col-md-4 mt-5 p-3 form-box border border-primary rounded-2 mx-auto d-flex flex-column align-items-center'>
                <h1 className='text-primary fw-bold'>Create Room</h1>
            </div>
            <div className='col-md-4 mt-5 p-3 form-box border border-primary rounded-2 mx-auto d-flex flex-column align-items-center'>
                <h1 className='text-primary fw-bold'>Join Room</h1>
            </div>
        </div>
    )
}

export default Forms
