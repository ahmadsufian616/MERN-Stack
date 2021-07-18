import React from 'react'
import { useState } from 'react'

const Box = (props) => {
const [color,setColor]=useState("")
// const [width,setWidth]=useState()


    const handleSubmit =  (e) =>{
        e.preventDefault();//stop refreshing
        props.addColor(color);
        // props.addWidth(width)
        
        

    }

    const saveColor =(e) =>{
        setColor(e.target.value);

    }
    // const saveWidth=(e)=>{
    //     setWidth(e.target.value)
    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>color</label>
                <input type="text" onChange={saveColor} value={color} />
                {/* <label>width</label>
                <input type="text" onChange={saveWidth} value={width} ></input> */}
                <button>Add</button>
            </form>

        </div>
    )
}

export default Box
