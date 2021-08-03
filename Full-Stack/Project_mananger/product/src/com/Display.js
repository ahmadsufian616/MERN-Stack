import React from 'react'
import { Link } from '@reach/router'

const Display = (props) => {
    return (
        <div>
            {props.product.map((product,idx)=>{
            return(
            <>
              <p key={idx}>{idx}- title: {product.title} price:{product.price} desc :{product.desc}</p>
            <Link to={`get/${product._id}`} >go to product</Link>
            <br/>
            <Link to={`edit/${product._id}`}>edit</Link>
            
            </>
            )
            
            })}
        </div>
    )
}

export default Display
