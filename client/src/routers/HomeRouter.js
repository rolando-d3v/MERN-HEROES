import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/layout/Header";
import dc from "../pages/dc";
import HeroeId from "../pages/HeroeId";
import Marvel from "../pages/Marvel";

export default function HomeRouter() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-8' >
        <Switch>
          <Route exact path="/marvel" component={Marvel} />
          <Route exact path="/hero/:heroId" component={HeroeId} />
          <Route exact path="/dc" component={dc} />
          
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}
