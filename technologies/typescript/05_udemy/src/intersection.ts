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
