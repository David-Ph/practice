/*
const us = new MainEntity();
us.process();

if(login){
  // ...
}

This is bad code, it's not very clear what it means
*/
// Example below is better
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.save = function () { };
    return User;
}());
var isLoggedIn = true;
var user = new User();
user.save();
if (isLoggedIn) {
    // ...
}
var DateUtil = /** @class */ (function () {
    function DateUtil() {
    }
    DateUtil.getFormattedToday = function () {
        var currentDate = new Date();
        return currentDate.toISOString();
    };
    return DateUtil;
}());
console.log(DateUtil.getFormattedToday());
