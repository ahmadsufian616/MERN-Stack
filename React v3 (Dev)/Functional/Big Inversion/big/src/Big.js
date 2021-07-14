import React from 'react'

const Big = props => {
    return (
        <div>
            <h1> name:{props.name}</h1>
            <p>age:{props.age}</p>
            <p>haircolor: {props.haircolor}</p>
        </div>
    )
}

export default Big
