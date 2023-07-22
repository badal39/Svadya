import React from 'react'
import Loader from "react-loader-spinner";

function Loading() {
    return (
        <>
   
        <Loader type="Oval" color="#64CD9E" 
             style={{
                position: 'absolute', left: '50%', top: '40%',
                transform: 'translate(-50%, -50%)',
                display:'block'

            }}
            height={100} width={100} />
            </>
    )

}

export default Loading
