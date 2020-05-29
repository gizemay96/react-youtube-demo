import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <ul className="sidebar-list list-group list-group-flush">
          <li className="sidebar-list-item list-group-item">
            <a className="icon-link-tag" href="">
              <i className="sidebar-list-icon fas fa-home"></i>
            </a>{" "}
            <br></br>
            <span className="sidebar-list-text">Home</span>
          </li>
          <li className="sidebar-list-item list-group-item">
            <a className="icon-fire-tag" href="">
              <i className="sidebar-list-icon fas fa-fire"></i>
            </a>{" "}
            <br></br>
            <span className="sidebar-fire-text">Trends</span>
          </li>
          <li className="sidebar-list-item list-group-item">
            <a className="icon-link-tag" href="">
              <i className="sidebar-list-icon fab fa-youtube-square"></i>
            </a>{" "}
            <br></br>
            <span className="sidebar-list-text">Subscription</span>
          </li>
          <li className="sidebar-list-item list-group-item">
            <a className="icon-link-tag" href="">
              <i className="sidebar-list-icon fas fa-book-open"></i>
            </a>{" "}
            <br></br>
            <span className="sidebar-list-text">Library</span>
          </li>
        </ul>
      </div>
    );
  }
}
