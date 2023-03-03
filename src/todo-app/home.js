
import React, { useState } from 'react'
import './todo.css';

function Calculator() {

  const [input,setInput]=useState([]);
  const buttonValues =[ "AC","DEL","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",".","="];
  
  const onInputBtn =(e)=>{
   let temp = [...input];
   let value = e.target.value;
   temp.push(value);
   setInput([...temp]);
  }
  const onInputChange =(e)=>{
    setInput(e.target.value)
  }

  return (
    <div className='calculator'>
      <div className='display'>
       
      </div>
      <div className='keyboard'>
         <table>
          <tbody>
            <tr>
              <button className='instructions'> AC</button>
              <button className='instructions'> DEL</button>
              <button className='instructions'> % </button>
              <button className='instructions'> / </button>
            </tr>
            <tr>
              <button onChange={onInputChange} onClick={onInputBtn}> 7</button>
              <button onClick={onInputBtn}> 8</button>
              <button onClick={onInputBtn}> 9</button>
              <button onClick={onInputBtn} className='instructions'> *</button>
            </tr>
            <tr>
              <button onClick={onInputBtn}> 4</button>
              <button onClick={onInputBtn}> 5</button>
              <button onClick={onInputBtn}> 6</button>
              <button className='instructions'> -</button>
            </tr>
            <tr>
              <button onClick={onInputBtn}> 1</button>
              <button onClick={onInputBtn}> 2</button>
              <button onClick={onInputBtn}> 3</button>
              <button className='instructions'> + </button>
            </tr>
            <tr>
              <button> 0</button>
              <button> .</button>
              <button className='row-span'> = </button>
            </tr>
          </tbody>
         </table>
      </div>
     
      
    </div>
  )
}

export default Calculator
