import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
