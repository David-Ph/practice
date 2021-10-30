// drag and drop interfaces
interface Draggable {
  dragStartFn(event: DragEvent): void;
  dragEndFn(event: DragEvent): void;
}

interface DragTarget {
  dragOverFn(event: DragEvent): void;
  dropFn(event: DragEvent): void;
  dragLeaveFn(event: DragEvent): void;
}

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

// Component Base Class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtStart ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
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
type Listener<T> = (projects: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListeners(listener: Listener<T>) {
    this.listeners.push(listener);
  }
}

class ProjectState extends State<Project> {
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

// ? ProjectItem class
class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return `1 person is working on this`;
    } else {
      return `${this.project.people} people is working on this`;
    }
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragStartFn(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }
  @Autobind
  dragEndFn(event: DragEvent) {
    console.log(this);
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartFn);
    this.element.addEventListener("dragend", this.dragEndFn);
  }

  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

// ? ProjectList class
class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProject: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProject = [];

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragOverFn(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault(); // allow drop to happen
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @Autobind
  dropFn(event: DragEvent) {
    event.preventDefault();
    const dropId = event.dataTransfer!.getData("text/plain");
    projectState.switchProjectStatus(
      dropId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  @Autobind
  dragLeaveFn(event: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverFn);
    this.element.addEventListener("dragleave", this.dragLeaveFn);
    this.element.addEventListener("drop", this.dropFn);

    projectState.addListeners((projects: Project[]) => {
      projects = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.Active;
        } else {
          return project.status === ProjectStatus.Finished;
        }
      });
      this.assignedProject = projects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const item of this.assignedProject) {
      const listId = this.element.querySelector("ul")!.id;
      new ProjectItem(listId, item);
    }
  }
}

//? Projectinput class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");

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
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

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

const projectState = ProjectState.getInstance();
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
