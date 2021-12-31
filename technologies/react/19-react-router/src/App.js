import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/products-detail/:productId">
          <ProductDetail />
        </Route>
        <h2>Let's get started!</h2>
      </main>
    </div>
  );
}

export default App;
