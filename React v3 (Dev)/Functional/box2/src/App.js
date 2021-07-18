import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BoxForm from './componets/BoxForm';
import DisplayBox from './componets/DisplayBox';



function App() {
  const [color,setColor]=useState([])
  const [width,setWidth]=useState([])
  const[height,setHeight]=useState([])

  const newColor =(newcolor)=>{
setColor([...color,newcolor]);
  }
  const newWidth=(newWidth)=>{
    setWidth([...width,newWidth])
  }
  const newHeight=(newHeight) =>{
    setHeight([...height,newHeight])
  }
  return (
    <div className="App">
      <BoxForm newColor={newColor} newWidth={newWidth} newHeight={newHeight} ></BoxForm>
      <DisplayBox color={color} width={width} height={height}></DisplayBox>


    </div>
  );
}

export default App;
