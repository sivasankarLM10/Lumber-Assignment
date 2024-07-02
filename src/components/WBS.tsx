import React, { useState } from 'react';
import { TaskComponent } from './Task';
import { WBS as WBSInterface, Task } from '../types';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

interface WBSProps {
  wbs: WBSInterface;
  tasks: Task[];
  focusedWBSId: number | null;
  onWBSClick: (wbsId: number) => void;
}

export const WBS: React.FC<WBSProps> = ({ wbs, tasks, focusedWBSId, onWBSClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const wbsTasks = tasks.filter(task => task.wbsId === wbs.id);

  const handleWBSClick = () => {
    setIsOpen(!isOpen);
    onWBSClick(wbs.id);
  };

  return (
    <div style={{ marginLeft: '14px' }}>
      <div 
        onClick={handleWBSClick} 
        style={{ 
          cursor: 'pointer', 
          userSelect: 'none', 
          display: 'flex', 
          alignItems: 'center',
          backgroundColor: focusedWBSId === wbs.id ? '#e6f2ff' : 'transparent'
        }}
      >
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
        <span style={{ marginLeft: '5px' }}>{wbs.name}</span>
      </div>
      {isOpen && wbsTasks.map(task => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};
