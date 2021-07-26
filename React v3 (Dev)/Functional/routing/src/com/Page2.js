import React from 'react'
import { Link } from '@reach/router'

const Page2 = ({no}) => {
    return (
        <div>
            <h1>{isNaN(no)? `The word is: ${no}`: `The number is: ${no}`}</h1>
            {/* <Link to="/route-one">go to page 1</Link> */}
        </div>
    )
}

export default Page2
