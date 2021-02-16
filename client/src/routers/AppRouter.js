import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import HomeRouter from "./HomeRouter";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} path="/login" component={Login} />
          <Route path="/" component={HomeRouter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
