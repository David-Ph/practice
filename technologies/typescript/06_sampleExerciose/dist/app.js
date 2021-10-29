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
class ProjectState {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListeners(listener) {
        this.listeners.push(listener);
        console.log(this.listeners);
    }
    addProject(title, desc, people) {
        const newProject = new Project(Math.random.toString(), title, desc, people, ProjectStatus.Active);
        this.projects.push(newProject);
        for (const listener of this.listeners) {
            listener(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById("project-list");
        this.hostElement = document.getElementById("app");
        this.assignedProject = [];
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        projectState.addListeners((projects) => {
            this.assignedProject = projects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = "";
        for (const item of this.assignedProject) {
            const listItem = document.createElement("li");
            listItem.textContent = item.title;
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + " PROJECTS";
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
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
const newInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
//# sourceMappingURL=app.js.map