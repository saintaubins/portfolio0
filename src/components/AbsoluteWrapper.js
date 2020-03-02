import React from 'react';
import '../App.css'

 const AbsoluteWrapper = ({ children }) => {
    return (
        <>
            <div className="position-absolute w-100" >
                {children}
            </div>
        </>
    )
}

export default AbsoluteWrapper;