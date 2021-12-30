import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Product />
      </Route>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
