import React from 'react';
import { useContext } from "react";
import counterContext from "./CounterContext.js";

const Child=(props)=>{
    let counterValue=useContext(counterContext);
        console.log(counterValue);
    return(
        <div>
        <h2>This is first child Using Context API</h2>
        <h4>Counter value is {counterValue[0]}</h4>
        <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>
    );
}

export default Child;