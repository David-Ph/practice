class Department {
  //   private name: string; // NOT A KEY VALUE PAIR
  // private employees: string[] = []; // now employees is only accessible from inside the class.
  protected employees: string[] = []; // now employees is only accessible from inside the class and children class.

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  // overriding / polymorphism
  addEmployee(name: string) {
    if (name === "Max") return;
    this.employees.push(name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (!this.lastReport) throw new Error("No report yet...");

    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please set valid report");
    this.addReport(value);
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

// ? ////////////////////////////////////////////////////////////////////
// ? ////////////////////////////////////////////////////////////////////
// ? ////////////////////////////////////////////////////////////////////
// ? ////////////////////////////////////////////////////////////////////

// const BackEnd = new Department("fuckingid", "Back-end engineer");
const BackEnd = new ITDepartment("fuckingid", ["Jack"]);

BackEnd.describe();
BackEnd.addEmployee("Bambang");
BackEnd.addEmployee("Charlie");
BackEnd.addEmployee("Max");
BackEnd.addEmployee("Alice");
BackEnd.printEmployees();
// console.log(BackEnd);

const backEndCopy = { describe: BackEnd.describe };
// backEndCopy.describe(); // Error, because backEndCopy is not of type Department
const newCopy = { name: "Dummy", describe: BackEnd.describe, size: 25 };
// newCopy.describe(); // will work

const Accounting = new AccountingDepartment("newDepartment");
// Accounting.mostRecentReport;
Accounting.addReport("SHIT WENT WRONG");
Accounting.mostRecentReport;
Accounting.mostRecentReport = "Fuck yeaj!";
Accounting.printReports();
