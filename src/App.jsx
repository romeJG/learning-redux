import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  add,
  addTest
} from './redux/slice/counterSlice';  // Import actions from the slice

function App() {
  const count = useSelector((state) => state.counter.count);
  const test = useSelector((state) => state.counter.test);
  const dispatch = useDispatch();
  const [input, setinput] = useState(2);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <h1>Test: {test}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input type="number" value={input} onChange={(e) => setinput(e.target.value)}></input>
      <button onClick={() => dispatch(add(Number(input)))}>Add</button>
      <button onClick={() => dispatch(addTest(Number(input)))}>Add test</button>


    </div>
  );
}


export default App;
