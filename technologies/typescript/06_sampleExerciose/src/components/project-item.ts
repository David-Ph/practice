import { Component } from "./base-component.js";
import { Draggable } from "../models/drag-drop.js";
import { Project } from "../models/project.js";
import { Autobind } from "../decorators/autobind.js";

// ? ProjectItem class
export class ProjectItem
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
