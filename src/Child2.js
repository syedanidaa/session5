import React from "react";
import { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
    let[state,dispatch]=useReducer(CounterReducer,1);
    console.log(state);
    return(
        <div>
        <h2>This is second child using Reducer</h2>
        <h4>Value of reducer state is {state}</h4>
        <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    );
}

export default Child2;