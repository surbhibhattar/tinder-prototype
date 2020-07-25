import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/login_signup_styles.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div class="container">
        <div>
          <img src="tinder_logo.png" alt="tinder_logo" class="logo" />
          <span class="company-title">MatchMaker</span>
        </div>
        <div>
          <input type="email" placeholder="john@email.com" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>LOGIN</button>
        </div>
        <div>
          <a href="#">Forgot Password?</a>
          <br />
          <Link to="/signup">Create New Account - Signup</Link>
        </div>
      </div>
    );
  }
}
