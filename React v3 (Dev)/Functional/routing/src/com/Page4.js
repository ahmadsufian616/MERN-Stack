import React from 'react'

const Page4 = ({w,c,b}) => {
    return (
        <div>
            <h1 style={{color:c, backgroundColor:b}} >{isNaN(w)?`${w}`:`please enter string not number`}</h1>
        </div>
    )
}

export default Page4
