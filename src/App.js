import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState({
    1: { name: 'Ir al gimnasio', state: 'false' },
    2: { name: 'Sacar a pasear al perro', state: 'false' },
    3: { name: 'Comprar leche', state: 'false' },
  });

  const [newTask, setNewTask] = useState('');

  function addNewTask(value) {
    const myId = Object.keys(list).length + 1;
    const newTask = { [myId]: { name: value, state: 'false' } };
    const myObject = Object.assign({}, list, newTask);
    setList(myObject);
    setNewTask('');
  }

  function changeState(i) {
    const newList = { ...list };
    list[i].state = 'true';
    setList(newList);
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
  };

  return (
    <div className='App'>
      <h1>My todo list</h1>
      {Object.keys(list).length > 0 &&
        Object.keys(list).map((key, i) => (
          <div key={i}>
            <span>{list[key].name}</span>
            <span
              onClick={(e) => {
                e.preventDefault();
                changeState(key);
              }}>
              {' '}
              {list[key].state}
            </span>
          </div>
        ))}
      <h2>Add a new task</h2>
      <input
        type='text'
        placeholder='Nueva tarea'
        onChange={(e) => setNewTask(e.currentTarget.value)}
        value={newTask}
      />
      <button onClick={(e) => handleSumbit(e)}>Add</button>
    </div>
  );
}

export default App;
