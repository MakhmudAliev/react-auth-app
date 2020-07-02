import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { ProtectedRoute } from "./components/protected/ProtectedRoute";

import "./styles/main.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  );
}

export default App;
