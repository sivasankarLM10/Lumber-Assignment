import React, { useState } from 'react';
import { WBS } from './WBS';
import { Project, WBS as WBSInterface, Task } from '../types';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

interface ProjectProps {
  project: Project;
  wbsList: WBSInterface[];
  tasks: Task[];
  focusedProjectId: number | null;
  focusedWBSId: number | null;
  onProjectClick: (projectId: number) => void;
  onWBSClick: (wbsId: number) => void;
}

export const ProjectComponent: React.FC<ProjectProps> = ({
  project,
  wbsList,
  tasks,
  focusedProjectId,
  focusedWBSId,
  onProjectClick,
  onWBSClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const projectWBS = wbsList.filter(wbs => wbs.projectId === project.id);

  const handleProjectClick = () => {
    setIsOpen(!isOpen);
    onProjectClick(project.id);
  };

  return (
    <div style={{ marginLeft: '0px' }}>
      <div 
        onClick={handleProjectClick} 
        style={{ 
          cursor: 'pointer', 
          userSelect: 'none', 
          display: 'flex', 
          alignItems: 'center',
          backgroundColor: focusedProjectId === project.id ? '#e6f2ff' : 'transparent'
        }}
      >
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
        <span style={{ marginLeft: '5px' }}>{project.name}</span>
      </div>
      {isOpen && projectWBS.map(wbs => (
        <WBS
          key={wbs.id}
          wbs={wbs}
          tasks={tasks}
          focusedWBSId={focusedWBSId}
          onWBSClick={onWBSClick}
        />
      ))}
    </div>
  );
};
