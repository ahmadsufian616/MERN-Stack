import logo from './logo.svg';
import './App.css';
import ProductForm from './com/ProductForm';
import Display from './com/Display';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Oneproduct from './com/Oneproduct';
import { Router } from '@reach/router';
import Update from './com/Update';
import Main from './com/Main';
function App() {
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
    <div className="App">
      
    <Router>
    <Main path='/'/>
    <Display path='/' product={product} />
    <Update path="edit/:id"/>
    <Oneproduct path="get/:id"></Oneproduct>
      </Router>
    </div>
  );
}

export default App;
