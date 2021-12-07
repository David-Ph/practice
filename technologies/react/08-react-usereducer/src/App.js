import React, {useContext} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* we use AuthContext to wrap components that needs it */}
      {/* .Provider is basically a component wrapper */}
      {/* now everything that is wrapped has access to the context */}
      {/* in the component that needs it, it needs to consume the provider */}
      {/* to have access to the context */}
      {/* this provider needs to have a value props where we store the value */}
      {/* left isLoggedIn is the variable we want to store in the context */}
      {/* right isLoggedIn is the state from above */}
      {/* <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler
        }}
      > */}
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
