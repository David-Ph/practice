///<reference path="base-component.ts" />
///<reference path="../decorators/autobind.ts" />

namespace App {
  // ? ProjectList class
  export class ProjectList
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
}
