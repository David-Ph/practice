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
