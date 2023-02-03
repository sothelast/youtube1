import React,{useReducer } from 'react';

const reducefun=(state,Action)=>{
    console.log(Action.type,state)
    switch(Action.type){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }

}
export default function Reduce() {
    const inital=0;
    
   

    const [state,dispatch]=useReducer(reducefun,inital);
    
    
  return (
    <>
    
    <h2>UseReducer</h2>
    <h4>{state}</h4>
    <button onClick={()=>dispatch({type:"increment"})}>Increment count</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement count</button>
    
    
    </>
  )
}
