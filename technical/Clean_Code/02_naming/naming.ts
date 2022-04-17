/* 
const us = new MainEntity();
us.process();

if(login){
  // ...
}

This is bad code, it's not very clear what it means
*/

// Example below is better
class User {
  save() {}
}

const isLoggedIn = true;

const user = new User();
user.save();

if (isLoggedIn) {
  // ...
}

class DateUtil {
  static getFormattedToday() {
    const currentDate = new Date();
    return currentDate.toISOString();
  }
}

console.log(DateUtil.getFormattedToday());

class Database {
  private client: any;

  // for getter and setter method
  // even though it's technically a method
  // it's oaky to name it as if it's a property
  // because we're accessing it like a property
  get connectedClient() {
    if (!this.client) {
      throw new Error("Database not connected!");
    }
    return this.client;
  }

  connect() {
    this.client = {};
  }
}

const db = new Database();
db.connectedClient.query();
