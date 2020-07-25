import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login_Signup from "./components/login_signup.component";

function App() {
  return (
    <Router>
      <Login_Signup />
    </Router>
  );
}

export default App;
