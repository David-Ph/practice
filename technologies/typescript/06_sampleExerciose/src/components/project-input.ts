import { Component } from "./base-component";
import { Validatable, validateInput } from "../util/validation";
import { Autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

//? Projectinput class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
    console.log(this);
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
    }
  }
}
