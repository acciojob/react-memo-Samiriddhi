<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState, useEffect } from 'react';

function App() {
  // State variables
  const [count, setCount] = useState(0);
  const [newTodo, setNewTodo] = useState('New todo');
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = () => {
    setTodos([...todos, newTodo]);
  };

  // Increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Add item to the list
  const addItem = () => {
    if (inputText.length > 5) {
      setTodos([...todos, inputText]);
      setInputText('');
    } else {
      alert('Text should be greater than 5 characters');
    }
  };

  return (
    <div>
      <h1>My Memo</h1>
      <button onClick={addTodo}>Add Todo</button>
      <span>{count}</span>
      <button onClick={incrementCount}>Increment</button>

      <input
        type="text"
        placeholder="Enter text (greater than 5 characters)"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={addItem}>Submit</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
