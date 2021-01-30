import React, { useState } from "react";


function Todo({ todo, index, removeTodo }) {
  return <div 
    className='todo'>
    {todo.text}
    <div>
      <button className="button button__remove" onClick={() => removeTodo(index)}>x</button>
    </div>
  </div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="todo todoForm">
      <input type="text" className='input' value={value}
        placeholder="Add tasks to list..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {

  const [todos, setTodo] = useState([
    {
      text: '리액트',
    },
    {
      text: '어렵당',
    },
    {
      text: '후..',
    }

  ]);

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodo(newTodo);
  }

 

  const removeTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  return (<div className='app'>
    <div className='todoList'>
    <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}  
    </div>
  </div>)
}


export default App;
