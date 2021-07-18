import React from 'react'

const Box = (props) => {
    const boxStyle={
height:props.height+'px',
width:props.width+'px',
background:props.color,
display:'flex',
margin:'15px',
    }



    
    return (
        <div style={boxStyle}> 
            
        </div>
    )
}

export default Box
