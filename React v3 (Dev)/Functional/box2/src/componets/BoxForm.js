import React from 'react'
import { useState } from 'react'
const BoxForm = (props) => {

 var colors=[];
 var widths=[];
 var heights=[];

const [color,setColor]=useState("")
const [width,setWidth]=useState("")
const [height,setHeight]=useState("")


const onHandel =(e) =>{
    e.preventDefault();
    colors.push(color);
    widths.push(width);
    heights.push(height);
    props.newColor(colors);
    props.newWidth(widths);
    props.newHeight(height);
    // setColor("");
    // setWidth("");
}

const onChangeColor = (e)=>{
    setColor(e.target.value);
}
const onchangeWidth =(e) => {
    setWidth(e.target.value);
}
const onchangeHeigth =(e) => {
    setHeight(e.target.value);
}

    return (
      
          <div>
              <form onSubmit={onHandel}>

                  <input type="text" name="color" placeholder="color" onChange={onChangeColor}/>
                  <input type="text" name="width" placeholder="width" onChange={onchangeWidth}/>
                  <input type="text" name="heigth" placeholder="width" onChange={onchangeHeigth}/>
                  <button>Add</button>




              </form>
            
        </div>
    )
}


export default BoxForm
