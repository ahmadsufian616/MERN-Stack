import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios';



const Oneproduct = (props) => {
    const [product,setProduct]=useState("");
useEffect(()=>{
axios.get("http://localhost:8000/api/get/"+props. id)
    .then(res=>setProduct(res.data))

},[])

    return (
        <div>
          <p>title: {product.title}</p>
          <p>price: {product.price}</p>
          <p>desc: {product.desc}</p>  
        </div>
    )
}

export default Oneproduct
