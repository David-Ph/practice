import { Fragment } from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      {isAuthenticated && <Header />}
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
