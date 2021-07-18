import React from 'react'
import Box from './Box';

const DisplayBox = (props) => {
    const color=props.color;
    const width =props.width;
    const height=props.height;

    return (
        <div style={{display:'flex' }}>
    {color.map((color,i)=>
    <Box key={i} color={color} width={width[i]} height={height[i]}/>
    )}        
        </div>
    )
}

export default DisplayBox
