import React from 'react';
import { Task } from '../types';

interface TaskProps {
  task: Task;
}

export const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  return (
    <div style={{ marginLeft: '40px' }}>
      {task.name}
    </div>
  );
};