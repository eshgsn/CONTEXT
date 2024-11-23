// src/components/TaskInput.js
import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px' }}>Add</button>
    </form>
  );
};

export default TaskInput;
