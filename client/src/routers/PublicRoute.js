import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({
  isAuthtenticated,
  component: RouteComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        isAuthtenticated 
        ? <RouteComponent {...props} /> 
        : <Redirect to="/" />;
      }}
    />
  );
};

export default PublicRoute;
