//? Validation Config
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validateInput(input: Validatable) {
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

//? Autobind decorator
function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      //this will be triggered when the method is called
      const bindFunction = originalMethod.bind(this); // and then it will bind this to whoever called the method ( the object)
      return bindFunction;
    },
  };
  return adjustedMethod; // and then we return the adjusted method
}

// ? Project type
enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// ?Project State Management
type Listener = (projects: Project[]) => void;

class ProjectState {
  private listeners: Listener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState;

  // private constructor means that this class shouldn't be able to be
  // manually constructed outside of this clas
  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addListeners(listener: Listener) {
    this.listeners.push(listener);
    console.log(this.listeners);
  }

  addProject(title: string, desc: string, people: number) {
    const newProject = new Project(
      Math.random.toString(),
      title,
      desc,
      people,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    for (const listener of this.listeners) {
      listener(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

// ? ProjectList class
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProject: Project[];

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.assignedProject = [];

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListeners((projects: Project[]) => {
      this.assignedProject = projects;
      this.renderProjects();
    });

    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const item of this.assignedProject) {
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

//? Projectinput class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleInputElement.value;
    const desc = this.descriptionInputElement.value;
    const people = this.peopleInputElement.value;

    const validateTitle: Validatable = {
      value: title,
      required: true,
      minLength: 5,
      maxLength: 50,
    };
    const validateDesc: Validatable = {
      value: desc,
      required: true,
      minLength: 5,
    };
    const validatePeople: Validatable = {
      value: +people,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validateInput(validateTitle) ||
      !validateInput(validateDesc) ||
      !validateInput(validatePeople)
    ) {
      console.log(`Invalid input`);
      return;
    } else {
      return [title, desc, +people];
    }
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
    }
  }
}

const newInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");

/* 
Hi it took me about an hour to figure it out. I will make it crystal clear.

Step 1: Instantiation of ProjectList Class

When you first instantiate ProjectList Class

    projectState.addListener((projects: any[]) => {
          this.assignedProjects = projects;
          this.renderProjects();
        });

above block of code will be executed, means that anonymous function will go and sit (no-execution will happen) inside listeners[] array. Because, the work of addListener() function is just to add a new function inside listeners[] array every time it get called.

Step 2:  When new project is added / after user click submit button

    for (const listenerFn of this.listeners) {
          listenerFn(this.projects.slice());
        }

Have a look in the above code, we are iterating through every functions inside listenerFn() and executing them by passing brand new array[] of projects. That means our anonymous function (shown below) which is already inside listener[] array will be executed. It will get brand new projects[] array as an argument, which is what it needs. Eventually, after execution  this.assignedProjects will store a brand new array of projects, and will render it in screen.

    (projects: any[]) => {
          this.assignedProjects = projects;
          this.renderProjects();
        }

*/
