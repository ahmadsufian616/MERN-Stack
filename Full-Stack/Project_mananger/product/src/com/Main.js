import React, { useState,useEffect } from 'react'
import axios from 'axios';
import ProductForm from './ProductForm';
import Display from './Display';

const Main = () => {
    const [product,setProduct]=useState([]);
const [loaded, setLoaded] = useState(false);
useEffect(()=>{
  axios.get('http://localhost:8000/api/getProduct')
      .then(res =>{
        setProduct(res.data);
        setLoaded(true);
      })
}
)

    return (
        <div>
            
    <ProductForm  />
    {loaded &&<Display  product={product} />}
     
        </div>
    )
}

export default Main
