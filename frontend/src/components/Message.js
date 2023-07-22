import React from 'react'
import { Alert } from 'react-bootstrap'

function Message({ variant, children }) {
    return (
        <Alert style={{textAlign:'center'}} variant={variant}>
           <h5 className="coustard"> {children} </h5>
        </Alert>
    )
}

export default Message