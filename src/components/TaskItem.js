// src/components/TaskItem.js
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        borderRadius: '4px',
      }}
    >
      <span>{task.text}</span>
      <button
        onClick={() => deleteTask(task.id)}
        style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
