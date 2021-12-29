import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  // becaause useSelecto sets up a subscription with the store
  // whenever the store changes
  // this component will also be reevaluated
  // and useEffect will run again, and it will update the cart again
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data...",
        })
      );
      const response = await fetch(
        "https://learn-react-c51fe-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data success!",
        })
      );

      const data = await response.json();
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendData().catch((err) => {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
