import React from 'react'

//Bootstrap
import Spinner from "react-bootstrap/Spinner";

function Loader() {
    return (
        <div className='loading'>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
