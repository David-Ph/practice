"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateInput(input) {
    let isValid = true;
    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !== 0;
    }
    if (input.minLength != null && typeof input.value === "string") {
        isValid = isValid && input.value.length >= input.minLength;
    }
    if (input.maxLength != null && typeof input.value === "string") {
        isValid = isValid && input.value.length <= input.maxLength;
    }
    if (input.min != null && typeof input.value === "number") {
        isValid = isValid && input.value >= input.min;
    }
    if (input.max != null && typeof input.value === "number") {
        isValid = isValid && input.value <= input.max;
    }
    return isValid;
}
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedMethod = {
        configurable: true,
        enumerable: false,
        get() {
            const bindFunction = originalMethod.bind(this);
            return bindFunction;
        },
    };
    return adjustedMethod;
}
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtStart) {
        this.hostElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element);
    }
}
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
class State {
    constructor() {
        this.listeners = [];
    }
    addListeners(listener) {
        this.listeners.push(listener);
    }
}
class ProjectState extends State {
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
class ProjectItem extends Component {
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    get persons() {
        if (this.project.people === 1) {
            return `1 person is working on this`;
        }
        else {
            return `${this.project.people} people is working on this`;
        }
    }
    dragStartFn(event) {
        event.dataTransfer.setData("text/plain", this.project.id);
        event.dataTransfer.effectAllowed = "move";
    }
    dragEndFn(event) {
        console.log(this);
    }
    configure() {
        this.element.addEventListener("dragstart", this.dragStartFn);
        this.element.addEventListener("dragend", this.dragEndFn);
    }
    renderContent() {
        this.element.querySelector("h2").textContent = this.project.title;
        this.element.querySelector("h3").textContent = this.persons;
        this.element.querySelector("p").textContent = this.project.description;
    }
}
__decorate([
    Autobind
], ProjectItem.prototype, "dragStartFn", null);
__decorate([
    Autobind
], ProjectItem.prototype, "dragEndFn", null);
class ProjectList extends Component {
    constructor(type) {
        super("project-list", "app", false, `${type}-projects`);
        this.type = type;
        this.assignedProject = [];
        this.configure();
        this.renderContent();
    }
    dragOverFn(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            const listEl = this.element.querySelector("ul");
            listEl.classList.add("droppable");
        }
    }
    dropFn(event) {
        event.preventDefault();
        const dropId = event.dataTransfer.getData("text/plain");
        projectState.switchProjectStatus(dropId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished);
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
    }
    dragLeaveFn(event) {
        const listEl = this.element.querySelector("ul");
        listEl.classList.remove("droppable");
    }
    configure() {
        this.element.addEventListener("dragover", this.dragOverFn);
        this.element.addEventListener("dragleave", this.dragLeaveFn);
        this.element.addEventListener("drop", this.dropFn);
        projectState.addListeners((projects) => {
            projects = projects.filter((project) => {
                if (this.type === "active") {
                    return project.status === ProjectStatus.Active;
                }
                else {
                    return project.status === ProjectStatus.Finished;
                }
            });
            this.assignedProject = projects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " PROJECTS";
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = "";
        for (const item of this.assignedProject) {
            const listId = this.element.querySelector("ul").id;
            new ProjectItem(listId, item);
        }
    }
}
__decorate([
    Autobind
], ProjectList.prototype, "dragOverFn", null);
__decorate([
    Autobind
], ProjectList.prototype, "dropFn", null);
__decorate([
    Autobind
], ProjectList.prototype, "dragLeaveFn", null);
class ProjectInput extends Component {
    constructor() {
        super("project-input", "app", true, "user-input");
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    renderContent() { }
    gatherUserInput() {
        const title = this.titleInputElement.value;
        const desc = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;
        const validateTitle = {
            value: title,
            required: true,
            minLength: 5,
            maxLength: 50,
        };
        const validateDesc = {
            value: desc,
            required: true,
            minLength: 5,
        };
        const validatePeople = {
            value: +people,
            required: true,
            min: 1,
            max: 5,
        };
        if (!validateInput(validateTitle) ||
            !validateInput(validateDesc) ||
            !validateInput(validatePeople)) {
            console.log(`Invalid input`);
            return;
        }
        else {
            return [title, desc, +people];
        }
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
        }
    }
}
__decorate([
    Autobind
], ProjectInput.prototype, "submitHandler", null);
const projectState = ProjectState.getInstance();
const newInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
//# sourceMappingURL=app.js.map