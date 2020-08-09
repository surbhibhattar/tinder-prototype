import React, { Component } from "react";
import SideBar from "./sidebar.component";

import "../css/home_styles.css";
import "../css/sidebar_styles.css";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Home extends Component {
  render() {
    return (
      <div class="home" id="App">
        <nav>
          <div class="left">
            <img src="tinder_logo.png" alt="match maker logo" class="logo" />
            <span>MatchMaker</span>
          </div>
          <div class="right">
            <span class="greeting_text">Welcome back, </span>
            <span class="greeter">Surbhi</span>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          </div>
        </nav>
        <div id="page-wrap">
          <div class="card">
            <img src="my_pic.jpg" alt="profile picture" />
            <div class="scroll_vertical">
              <div class="user_info">
                <span class="username">Surbhi, </span>
                <span class="age">27</span>
              </div>
              <div class="city">Jodhpur</div>
              <hr />
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lorem lorem, bibendum at leo id, tincidunt elementum quam.
                Integer eu vehicula nisi. Aenean non consequat ligula. Praesent
                non enim bibendum, faucibus velit a, placerat orci. Aenean ac
                scelerisque ipsum, nec convallis lorem. Ut id massa
                tellus.erhgjrre reh erfjk werhk ewrkj erkjnekjqwlk 3ryufbsdm
                eejj ekjqhke efqkjfhqkje etkjhq erhqjk qejrhkq qejqkej
                qewrjkhqkjr qwekrjhk
              </div>
            </div>
          </div>
          <div class="options">
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
            <button>
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
