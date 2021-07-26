import logo from './logo.svg';
import './App.css';
import Search from './com/Search';
import { useState } from 'react';
import People from './com/People';
import Planet from './com/Planet';
import { Router } from '@reach/router';
function App() {
 
  return (
    <div className="App">
       <Search></Search>
       <Router>
        <People path="/people/:id"/>
        <Planet path="/planets/:id"/>
      </Router>
    </div>
  );
}

export default App;
