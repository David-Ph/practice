class Department {
  //   private name: string; // NOT A KEY VALUE PAIR
  private employees: string[] = []; // now employees is only accessible from inside the class.
  //contructor is a function that is executed when
  // a new instance is created, basically it allows us to
  // initialize the property
  //   constructor(n: string) {
  //     this.name = n;
  //   }

  // this is a shorthand constructor
  constructor(private readonly id: string, public name: string) {}

  //   basically, we're binding "this" to that of type Department
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  private method() {
    console.log("this is a private method");
    console.log("That is only accessible from this clas");
  }
}

const BackEnd = new Department("fuckingid", "Back-end engineer");

BackEnd.describe();
BackEnd.addEmployee("Bambang");
BackEnd.addEmployee("Charlie");
BackEnd.addEmployee("Alice");
BackEnd.printEmployees();

const backEndCopy = { describe: BackEnd.describe };
// backEndCopy.describe(); // Error, because backEndCopy is not of type Department

const newCopy = { name: "Dummy", describe: BackEnd.describe, size: 25 };
// newCopy.describe(); // will work
