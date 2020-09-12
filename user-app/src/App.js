import React from 'react';
import './App.css';
import './script.js';
import Hello from './sayHello';

function App(){
  const sayHello = () =>{
    console.log('sasa');
  }
  return(
    <div>
      <Hello/>
    </div>
  );
}
export default App;