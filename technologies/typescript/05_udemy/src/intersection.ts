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

function add(a: Combinable, b: Combinable) {
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

export default {
  number: 1,
  string: "hello",
};
