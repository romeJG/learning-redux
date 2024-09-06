import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, reset, moveToDone, removeDone } from './redux/slice/todoSlice';

function App() {
  const todos = useSelector((state) => state.toDoList.todos);
  const done = useSelector((state) => state.toDoList.done);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todo App</h1>
      <div className="input-section">
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo..."
        />
        <button className="todo-button" onClick={() => { if (input) dispatch(addTodo(input)); setInput(''); }}>
          Add Todo
        </button>
        <button className="reset-button" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>

      <div className="todo-section">
        <h2 className="todo-subheading">Todos</h2>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="todo-item" key={index}>
              {todo}
              <div className="button-group">
                <button className="remove-button" onClick={() => dispatch(removeTodo(index))}>
                  Remove
                </button>
                <button className="done-button" onClick={() => dispatch(moveToDone(index))}>
                  Done
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="done-section">
        <h2 className="todo-subheading">Done</h2>
        <ul className="todo-list">
          {done.map((todo, index) => (
            <li className="todo-item done-item" key={index}>
              {todo}
              <button className="remove-button" onClick={() => dispatch(removeDone(index))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
