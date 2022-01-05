import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <Fragment>
      <h1>The Welcome Page</h1>
      {/* <Routes> */}
        {/* <Route path="new-user" element={<p>Welcome, new user!</p>} /> */}
      {/* </Routes> */}
      <Outlet />
    </Fragment>
  );
};

export default Welcome;
