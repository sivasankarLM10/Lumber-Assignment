import React, { useState } from 'react';
import projectData from './data/project.json';
import wbsData from './data/wbs.json';
import taskData from './data/task.json';
import { ProjectComponent } from './components/Project';
import { Project, WBS as WBSInterface, Task } from './types';

const App: React.FC = () => {
  const projects: Project[] = projectData;
  const wbsList: WBSInterface[] = wbsData;
  const tasks: Task[] = taskData;

  const [focusedProjectId, setFocusedProjectId] = useState<number | null>(null); // State to track focused project
  const [focusedWBSId, setFocusedWBSId] = useState<number | null>(null); // State to track focused WBS

  const handleProjectClick = (projectId: number) => {
    setFocusedProjectId(projectId);
    setFocusedWBSId(null); // Reset WBS focus when project is clicked
  };

  const handleWBSClick = (wbsId: number) => {
    setFocusedProjectId(null); // Reset project focus when WBS is clicked
    setFocusedWBSId(wbsId); // Set this WBS as focused
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {projects.map(project => (
        <ProjectComponent
          key={project.id}
          project={project}
          wbsList={wbsList}
          tasks={tasks}
          focusedProjectId={focusedProjectId}
          focusedWBSId={focusedWBSId}
          onProjectClick={handleProjectClick}
          onWBSClick={handleWBSClick}
        />
      ))}
    </div>
  );
};

export default App;
