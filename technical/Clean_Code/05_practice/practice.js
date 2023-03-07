function createUser(email, password) {
  try {
    validateUser(email, password);

    const newUser = buildUser(email, password);

    saveUserToDatabase(newUser);
  } catch (error) {
    handleError(error);
  }
}

function buildUser(email, password) {
  return {
    email,
    password,
  };
}

function saveUserToDatabase(user) {
  database.insert(user);
}

function validateUser(email, password) {
  if (!validateEmail(email)) {
    throw new Error("Invalid email!");
  }

  if (!validatePassword(password)) {
    throw new Error("Invalid password!");
  }
}

function validateEmail(email) {
  return email && email.includes("@");
}

function validatePassword(password) {
  return password && password.trim() !== "";
}

function handleError(error) {
  console.log(error);
}
