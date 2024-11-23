// src/components/TaskList.js
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add a task to get started!</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
