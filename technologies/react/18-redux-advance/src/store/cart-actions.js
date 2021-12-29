import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// this is a thunk function
export const fetchCartData = (cart) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://learn-react-c51fe-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed!",
        })
      );
    }
  };
};

// this is a thunk function
export const sendCartData = (cart) => {
  // when we dispatch this, the dispatch will also automatically
  // pass the dispatch itself as an argument, so we can call the dispatch again inside here
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://learn-react-c51fe-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data success!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed!",
        })
      );
    }
  };
};
