import React, { useState, useEffect } from 'react';
import { NewTask } from './components/NewTask';
import { TodosList } from './components/TodosList';

const API_URL = 'http://localhost:4000/api/days';

const App = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setDays(data);
      });
  }, []);

  return (
    <>
      <div id="app-container">
        {/* <NewTask addTodo = {task => updateTasks([...tasks, task])}/> */}
        <TodosList days={days} />
      </div>
    </>
  );
};

export default App;
