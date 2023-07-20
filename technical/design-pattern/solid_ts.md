## Single Responsiblity Principle

S in solid basically means that each class/method/function should only have 1 single responsiblity to handle. So for example `Order` class should only handle things relatd to orders and not `Employees` for example

so in solid.ts right now, the `Order` class is not ideal because the it's doing too much responsibility. `addItem` and `totalPrice` seems ok, but `pay` method should definitely be on its own class.

so we should extract this part of the code

```
pay(paymentType: string, securityCode: string) {
    if (paymentType === "debit") {
      console.log("Processing debit payment type");
      console.log("Verifiying status code:", securityCode);
      this.status = "paid";
      console.log(`Order is ${this.status}`);
    } else if (paymentType === "credit") {
      console.log("Processing credit payment type");
      console.log("Verifiying status code:", securityCode);
      this.status = "paid";
      console.log(`Order is ${this.status}`);
    } else {
      new Error(`Unknown payment type: ${paymentType}`);
    }
  }
```

into this

```
class PaymentProcessor {
  payDebit(order: Order, securityCode: string) {
    console.log("Processing debit payment type");
    console.log("Verifiying status code:", securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }

  payCredit(order: Order, securityCode: string) {
    console.log("Processing credit payment type");
    console.log("Verifiying status code:", securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}
```

## Open/Closed Principle

What this principles basically means is we should be able to add new functionality to our code, without modifying previous code.

in our `solid.ts`, right now if we want to add a new payment processor like paypal for example, we have to modify our code directly. So a better solution is to change our code from this:

```
class PaymentProcessor {
  payDebit(order: Order, securityCode: string) {
    console.log("Processing debit payment type");
    console.log("Verifiying status code:", securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }

  payCredit(order: Order, securityCode: string) {
    console.log("Processing credit payment type");
    console.log("Verifiying status code:", securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}
```

to this

```
abstract class PaymentProcessor {
  abstract pay(order: Order, securityCode: string): void;
}

class DebitPaymentProcessor extends PaymentProcessor {
  pay(order: Order, securityCode: string) {
    console.log("Processing debit payment type");
    console.log("Verifiying status code:", securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  pay(order: Order, securityCode: string) {
    console.log("Processing credit payment type");
    console.log("Verifiying status code:", securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}
```

## Liskov substitution principle

If you have objects in a program, you should be able to replace them with instances of their subclasses and it shouldn't break the program.

In our code, if we want to add a `PaypalPaymentProcessor` which uses an email instead of security code, that means it won't work. So we should change our code like this:

```
class DebitPaymentProcessor extends PaymentProcessor {
  pay(order: Order, securityCode: string) {
    console.log("Processing debit payment type");
    console.log("Verifiying status code:", securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}
```

to this

```
class DebitPaymentProcessor extends PaymentProcessor {
  securityCode = "";

  constructor(securityCode: string) {
    super();
    this.securityCode = securityCode;
  }

  pay(order: Order) {
    console.log("Processing debit payment type");
    console.log("Verifiying status code:", this.securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}
```

## Interface Segregation Principle

This basically says that it's better for you to have several specific interfaces instead of one general interface.

So instead of one general interface, we should split it so subclasses can have more meaningful behavior

The issue with our current `solid.ts` code is we have a parent class `PaymentProcessor` that has `authSms` method, but not all its subclass needs that class, so instead of having `authSms` in `PaymentProcessor`, we could create a new subclass that extends from `PaymentProcessor` called `PaymentProcessor_SMS`, then if any payment processor needs the `authSms` method, they can extend from this class.

There's another way to use composition instead though.

example:

```
abstract class PaymentProcessor {
  abstract pay(order: Order, securityCode: string): void;

  abstract authSms(code: string): void;
}

class DebitPaymentProcessor extends PaymentProcessor {
  securityCode = "";
  verified = false;

  constructor(securityCode: string) {
    super();
    this.securityCode = securityCode;
  }

  authSms(code: string) {
    console.log("Verifying SMS Code:", code);
    this.verified = true;
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

  authSms(code: string) {
    new Error("No authentication needed!");
  }

  pay(order: Order) {
    console.log("Processing credit payment type");
    console.log("Verifiying securityCode:", this.securityCode);
    order.status = "paid";
    console.log(`Order is ${order.status}`);
  }
}
```

into, basically we create a new class called `SMSAuth` and we compose that into the payment processor constructor.

```
class SMSAuth {
  authorized = false;

  verifyCode(code: string) {
    console.log("Verifying code", code);
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
  authorizer: SMSAuth;

  constructor(securityCode: string, authorizer: SMSAuth) {
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
  authorizer: SMSAuth;

  constructor(email: string, authorizer: SMSAuth) {
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

```

# Dependency Inversion

This basically means that we want our classes to depend on abstractions instead of a specific subclasses.

In our current code right now, this is a problem because we needed a specific `SMSAuth` class in our classes.

A better way is to create an abstract `Authorizer` class, then we can create new authorizer like our `SMSAuth` class extending from that class.

```
class SMSAuth {
  authorized = false;

  verifyCode(code: string) {
    console.log("Verifying code", code);
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
  authorizer: SMSAuth;

  constructor(securityCode: string, authorizer: SMSAuth) {
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
  authorizer: SMSAuth;

  constructor(email: string, authorizer: SMSAuth) {
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
```

to this

```
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

```
