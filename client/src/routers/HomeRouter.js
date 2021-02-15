import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/layout/Header";
import dc from "../pages/dc";
import heroe from "../pages/heroe";
import Marvel from "../pages/Marvel";

export default function HomeRouter() {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route exact path="/marvel" component={Marvel} />
          <Route exact path="/heroe/:heroId" component={heroe} />
          <Route exact path="/dc" component={dc} />
          
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}
