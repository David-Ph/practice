function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging PersonFactory")
class PersonFactory {
  name = "Max";

  constructor() {
    console.log("Creating a person....");
  }
}

const newPerson = new PersonFactory();
console.log(newPerson);
