import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Page1 from './com/Page1';
import Page2 from './com/Page2';
import Page3 from './com/Page3';
import Page4 from './com/Page4';
function App() {
  return (
    <div className="App">
     <Router>
       <Page1 path="/home" />
       <Page2 path="/:no" />
       <Page4 path="/:w/:c/:b"/>
     </Router>
      
    </div>
  );
}

export default App;
