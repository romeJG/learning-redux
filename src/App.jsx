import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  removeTodo,
  reset
} from './redux/slice/todoSlice';  // Import actions from the slice

function App() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
      <button onClick={() => dispatch(addTodo(input))}>Add Todo</button>
      <br />
      <button onClick={() => dispatch(reset())}> reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
