import { Route } from "react-router-dom";
import React from "react";

function Welcome() {
  return (
    <div>
      <h1>Welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </div>
  );
}

export default Welcome;
