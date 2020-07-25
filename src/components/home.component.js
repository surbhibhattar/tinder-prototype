import React, { Component } from "react";
import SideBar from "./sidebar.component";

import "../css/home_styles.css";
import "../css/sidebar_styles.css";

export default class Home extends Component {
  render() {
    return (
      <div class="home">
        <nav>
          <div>
            <img src="tinder_logo.png" alt="match maker logo" class="logo" />
            <span>MatchMaker</span>
          </div>
          <div class="right">
            <div>
              <span class="greeting_text">Welcome back, </span>
              <span class="greeter">Surbhi</span>
            </div>

            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          </div>
        </nav>
        <div id="page-wrap"></div>
      </div>
    );
  }
}
