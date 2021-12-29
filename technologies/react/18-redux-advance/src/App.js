import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  // becaause useSelecto sets up a subscription with the store
  // whenever the store changes
  // this component will also be reevaluated
  // and useEffect will run again, and it will update the cart again
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://learn-react-c51fe-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
