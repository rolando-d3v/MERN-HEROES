import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

import Login from "../pages/Login";
import HomeRouter from "./HomeRouter";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {

  const {user} = useContext(AuthContext)

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <PrivateRoute path="/" component={HomeRouter} isAuthenticated={user.logged} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
