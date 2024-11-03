import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "../views/Dashboard";
import Forms from "../views/Forms";
import Home from "../views/Home";
import Settings from "../views/Settings";
import Signin from "../views/Signin";
import Signup from "../views/Signup";

import {
  isAuthenticated,
  handleVerificationProtected,
} from "../services/authentication";
import Protected from "./protected";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Protected />}>
        <Route
          index
          element={<Home />}
          loader={() => handleVerificationProtected()}
        />
        <Route
          path="settings"
          element={<Settings />}
          loader={() => handleVerificationProtected()}
        />
        <Route
          path="dashboard"
          element={<Dashboard />}
          loader={() => handleVerificationProtected()}
        />
        <Route
          path="new/:type"
          element={<Forms />}
          loader={() => handleVerificationProtected()}
        />
        <Route
          path="type/:id"
          element={<Forms />}
          loader={() => handleVerificationProtected()}
        />
      </Route>

      <Route
        path="signin"
        element={<Signin />}
        loader={() => isAuthenticated()}
      />
      <Route
        path="signup"
        element={<Signup />}
        loader={() => isAuthenticated()}
      />
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
