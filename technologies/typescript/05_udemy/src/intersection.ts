type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type EitherEmployee = Admin | Employee;

const intersectionEmploye: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

const unionEmployee: EitherEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// const newUniversal: Universal = 'hello';

function addCombineable(a: Combinable, b: Combinable) {
  // this is a type guard
  // where we check type safety ourselves
  // usually used for union types flexibility where the type can be number or string
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

function printEmployee(emp: EitherEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

const firstEmployee: Admin = {
  name: "Max",
  privileges: ["create-server"],
};

printEmployee(firstEmployee);
printEmployee(unionEmployee);
printEmployee(intersectionEmploye);

class Car {
  color = "black";
  drive() {
    console.log(`I'm driving...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck...`);
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(5);
  }
}

useVehicle(v1);
useVehicle(v2);

// another form of type guard
// we create a type bird that we can access and check from a function
interface Bird {
  tipe: "bird";
  flyingSpeed: number;
}

interface Horse {
  tipe: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed = 0;
  switch (animal.tipe) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }
  console.log(`Moving at speed ${speed}`);
}

moveAnimal({ tipe: "bird", flyingSpeed: 500 });

// const newParagraph = document.querySelector("h2")!;
// this is type casting
// basically telling typescript that this is what we will get
const userInput = <HTMLInputElement>document.getElementById("user-input");
const userInput2 = document.getElementById("userInput") as HTMLInputElement;
const hello = <string>"Hello";

userInput.value = "Hello";
userInput2.value = "World";
