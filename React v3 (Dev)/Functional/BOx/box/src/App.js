import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import ShowBox from './components/ShowBox';
import { useState } from 'react';
function App() {
  const  [colors,setColors]=useState([]);
  // const[width,setWidth]=useState([])

  const addColor =(value) =>{ 
    setColors([...colors, value]);
  }
  // const addWidth=(value) =>{
  //   setWidth([...width,value])
  // }


  return (
    <div className="App">
  <Box addColor={addColor} ></Box>
  <ShowBox colors={colors}></ShowBox>
    </div>
  );
}

export default App;
