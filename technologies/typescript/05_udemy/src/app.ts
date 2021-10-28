function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById("app");
    const p = new constructor(); // new instance of PersonFactory class
    if (hookEl) {
      hookEl.innerHTML = template.replace("#name#", p.name);
    }
  };
}

// @Logger("Logging PersonFactory")
@WithTemplate("<h1>My name is #name#</h1>", "app")
class PersonFactory {
  name = "Max";

  constructor() {
    console.log("Creating a person....");
  }
}

const newPerson = new PersonFactory();
console.log(newPerson);
