export interface Project {
    id: number;
    name: string;
  }
  
  export interface WBS {
    id: number;
    projectId: number;
    name: string;
  }
  
  export interface Task {
    id: number;
    wbsId: number;
    name: string;
  }
  