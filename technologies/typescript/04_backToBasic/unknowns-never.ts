let userInput: unknown;
let userName: string;

userInput = 5; // works
userInput = "hello";

// userName = userInput; // error
if (typeof userInput === "string") {
  userName = userInput; // works
}

// never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Not found", 404);
