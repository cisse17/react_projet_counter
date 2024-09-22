import React from 'react';
import "../style.css";
import  { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount(count + 1);
  }
  const decrement = () => {
    return setCount(count - 1);
  }

  return (
    <>
      <div className='container'>
        <h1 className='number'>{count}</h1>
      </div>
      <section className='btns-container'>
        <button onClick={increment} className='de-increment'> + </button>
        <button onClick={decrement} className='de-increment'> - </button>
      </section>
    </>
  )
};  

export default Counter
