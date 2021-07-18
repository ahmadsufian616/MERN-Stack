import React from 'react'
import { useState } from 'react';
const taps=["tap1","tap2","tap3"]

const Taps = (props) => {
    const [msg,setMsg]=useState("")

    const onClickHandler = (e, value) => {
        setMsg(value +"test");
    }
    return(<> 
        {taps.map( (item, index) => {
                return <button  onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    
            })}
            <p>{msg}</p>
            </>) 
}

export default Taps
