import React from 'react'

const Lazy = () =>{
    return (
        <div className="lazy-load">
            <h1 className="lazy-heading">BackBenchers</h1><br/>
            <span className="lazy-loading">
                Loading... 
            </span>
            <span className="lazy-icon"></span>
        </div>
    )
}
export default Lazy