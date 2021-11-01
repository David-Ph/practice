import { Project, ProjectStatus } from "../models/project.js";

// ?Project State Management
type Listener<T> = (projects: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListeners(listener: Listener<T>) {
    this.listeners.push(listener);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  // private constructor means that this class shouldn't be able to be
  // manually constructed outside of this clas
  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, desc: string, people: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      desc,
      people,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    this.updateListener();
  }

  switchProjectStatus(projectId: string, status: ProjectStatus) {
    const findProject = this.projects.find(
      (project) => project.id === projectId
    );
    if (findProject && findProject.status !== status) {
      findProject.status = status;
      this.updateListener();
    }
  }

  private updateListener() {
    for (const listener of this.listeners) {
      listener(this.projects.slice());
    }
  }
}
export const projectState = ProjectState.getInstance();
