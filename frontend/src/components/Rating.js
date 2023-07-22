import React from 'react'

function Rating({value,text}) {
    return (
        <div >
            
            <span>
                <img  src={
                    value >= 1
                        ? '/icons/full_star.svg'
                        : value >= 0.5
                            ? '/icons/half_star.svg'
                            : '/icons/empty_star.svg'
                } alt="1"/>

            
            </span>
            <span>
                <img  src={
                    value >= 2
                        ? '/icons/full_star.svg'
                        : value >= 1.5
                            ? '/icons/half_star.svg'
                            : '/icons/empty_star.svg'
                } alt="2"/>

            
            </span>
            <span>
                <img  src={
                    value >= 3
                        ? '/icons/full_star.svg'
                        : value >= 2.5
                            ? '/icons/half_star.svg'
                            : '/icons/empty_star.svg'
                } alt="3"/>

            
            </span>
            <span>
                <img  src={
                    value >= 4
                        ? '/icons/full_star.svg'
                        : value >= 3.5
                            ? '/icons/half_star.svg'
                            : '/icons/empty_star.svg'
                } alt="4"/>

            
            </span>
            <span>
                <img  src={
                    value >= 5
                        ? '/icons/full_star.svg'
                        : value >= 4.5
                            ? '/icons/half_star.svg'
                            : '/icons/empty_star.svg'
                } alt="5"/>

<span style={{fontSize:"15px"}} className="my-0 mx-3"> {text && text}</span>           

            </span>


        </div>
    )
}

export default Rating
