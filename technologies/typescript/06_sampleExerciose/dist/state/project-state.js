import { Project, ProjectStatus } from "../models/project.js";
class State {
    constructor() {
        this.listeners = [];
    }
    addListeners(listener) {
        this.listeners.push(listener);
    }
}
export class ProjectState extends State {
    constructor() {
        super();
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, desc, people) {
        const newProject = new Project(Math.random().toString(), title, desc, people, ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListener();
    }
    switchProjectStatus(projectId, status) {
        const findProject = this.projects.find((project) => project.id === projectId);
        if (findProject && findProject.status !== status) {
            findProject.status = status;
            this.updateListener();
        }
    }
    updateListener() {
        for (const listener of this.listeners) {
            listener(this.projects.slice());
        }
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=project-state.js.map