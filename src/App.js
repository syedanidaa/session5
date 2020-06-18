import React, {useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import Child from './Child.js';
import counterContext from "./CounterContext";

function App() {
 let countState=useState(1); //count,setcount (array of length:2) where [0]=1 and [1] which we will set(setcount)
 
  return (
    <counterContext.Provider value={countState}>   
    <div> 
     <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
