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
var BlogPost = /** @class */ (function () {
    function BlogPost(title, description, datePosted) {
        this.title = title;
        this.description = description;
        this.datePosted = datePosted;
    }
    return BlogPost;
}());
function printBlogPost(post) {
    console.log("Title is", post.title);
    console.log("Description is", post.description);
    console.log("Posted on", post.datePosted);
}
var firstBlogPost = new BlogPost("Welcome to Dota, you suck.", "My guide on how to not suck at dota", new Date());
printBlogPost(firstBlogPost);
