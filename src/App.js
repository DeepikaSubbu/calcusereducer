import React, { useState, useReducer } from 'react';
import './App.css';
import { reducer } from './reducer';

export default function App() {
  const [values1,setValues]=useState({
    values:'',
    value1:'',
    value2:''
  })
  
  const [state, dispatch] = useReducer(reducer, values1);
  
  
  const handleonChange=(e)=>{ 

  
    setValues(...state,state.target.name=(e.target.values))
   
    
    }
  return (
    <>
      <h3> Calculator Application </h3>
      {/* <input 
          name='firstName' 
          type='text'
          onChange={inputsHandler}
          value={inputField.firstName}
        />
        <br/>
      <br/> */}
      {/* <input id="text2" name="text2" type="number"></input> */}
      

      <input type="text" onChange={(e)=>{setValues(state.value1=(e.target.value))}} name="value1" /><br/><br/>
      <input type="text" onChange={(e)=>{setValues(state.value2=e.target.value)}} name="value2"/><br/><br/>
      <br/>
      <br/>

      <b>Result: {state.values} </b><br /> <br />
      <br/>
      <br/>
      
      <button onClick={() => dispatch({ type: 'ADDITION', payload:{num1:state.value1, num2:state.value2} })}>
        {' '}
        +{' '}
      </button>{' '}
      &nbsp;
      <br/>
      <br/>
      
      <button onClick={() => dispatch({ type: 'SUBTRACTION', payload:{num1:state.value1, num2:state.value2} })}>
        {' '}
       -{' '}
      </button>{' '}
      <br/>
      <br/>
      
      <button onClick={() => dispatch({ type: 'MULTIPLICATION',payload: {num1:state.value1, num2:state.value2} })}> *</button>{' '}
      &nbsp;
      <br/>
      <br/>
      
      <button onClick={() => dispatch({ type: 'DIVISION' ,payload:{num1:state.value1, num2:state.value2} })}>
        {' '}
       /{' '}
      </button>{' '}
    </>
  );
}

