class Order {
  items: string[] = [];
  quantities: number[] = [];
  prices: number[] = [];
  status = "open";

  addItem(name: string, quantity: number, price: number) {
    this.items.push(name);
    this.quantities.push(quantity);
    this.prices.push(price);
  }

  totalPrices(): number {
    let total = 0;

    this.items.forEach((item, index) => {
      total += this.quantities[index] * this.prices[index];
    });

    return total;
  }
}

abstract class Authorizer {
  abstract isAuthorized(): boolean;
}

class SMSAuth extends Authorizer {
  authorized = false;

  verifyCode(code: string) {
    console.log("Verifying code", code);
    this.authorized = true;
  }

  isAuthorized(): boolean {
    return this.authorized;
  }
}

class NotARobotAuthorizer extends Authorizer {
  authorized = false;

  notARobot() {
    console.log("Are you a robot? Naaaa.....");
    this.authorized = true;
  }

  isAuthorized(): boolean {
    return this.authorized;
  }
}

abstract class PaymentProcessor {
  abstract pay(order: Order, securityCode: string): void;
}

class DebitPaymentProcessor extends PaymentProcessor {
  securityCode = "";
  authorizer: Authorizer;

  constructor(securityCode: string, authorizer: Authorizer) {
    super();
    this.securityCode = securityCode;
    this.authorizer = authorizer;
  }

  pay(order: Order) {
    console.log("Processing debit payment type");
    console.log("Verifiying status code:", this.securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  securityCode = "";
  verified = false;

  constructor(securityCode: string) {
    super();
    this.securityCode = securityCode;
  }

  pay(order: Order) {
    console.log("Processing credit payment type");
    console.log("Verifiying securityCode:", this.securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}

class PaypalPaymentProcessor extends PaymentProcessor {
  email = "";
  authorizer: Authorizer;

  constructor(email: string, authorizer: Authorizer) {
    super();
    this.email = email;
    this.authorizer = authorizer;
  }

  pay(order: Order, email: string) {
    console.log("Processing credit payment type");
    console.log("Verifiying email:", this.email);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}

const order = new Order();
order.addItem("Indomie", 1, 3000);
order.addItem("Aqua", 2, 2500);
order.addItem("Telur", 12, 24000);

console.log(order.totalPrices());

const SMSAuthorizer = new SMSAuth();
const robot = new NotARobotAuthorizer();
const debitProcessor = new DebitPaymentProcessor("12325", SMSAuthorizer);
const paypalProcessor = new PaypalPaymentProcessor("email", robot);
debitProcessor.pay(order);
robot.notARobot();
SMSAuthorizer.verifyCode("12345");
