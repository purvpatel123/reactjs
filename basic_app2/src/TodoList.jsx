import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'; //for generating unique id for each todo

export default function TodoList() {
  let [todos, setTodos] = useState([{task:"sample task",id:uuidv4()}]); //for storing the list of todos
  let [newTodo, setNewTodo] = useState("");//for changing the value of input field

  const updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  const addNewTask = () => {
    
      setTodos([...todos,{ task: newTodo, id: uuidv4() }]);//adding new todo to the list
      setNewTodo(""); 
    
  };

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button className="todo-button" onClick={addNewTask}>Add</button>
      <br /><br />
      <hr />
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo) => (//displaying the list of todos
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}