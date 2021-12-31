import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="*">
            <h1>Page not found.</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
