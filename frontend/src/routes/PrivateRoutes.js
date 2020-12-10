import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "../containers/HomePage";
import Dashboard from "../containers/Dashboard";
import CreateProductScreen from "../screens/CreateProductScreen";

const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/dashboard" component={Dashboard} />
        <Route exact={true} path="/home" component={HomePage} />
        <Route path="/create-product" component={CreateProductScreen} exact />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
};
export default PrivateRoutes;