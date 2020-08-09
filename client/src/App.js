import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import PageNotFound from "./components/page_not_found.component";
import Home from "./components/home.component";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
