import React, { Component } from "react";
import logo from "../img/logo.png";
import user from "../img/user.png";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img border="0" src={logo} width="80" height="18"></img>
          </a>
          <form className="nav-form form-inline my-2 my-lg-0">
            <input
              className="nav-input form-control mr-sm-2"
              type="search"
              placeholder="Search"
            ></input>
            <button
              className="btn-search btn btn-outline-secondary my-2 my-sm-0"
              type="submit"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="nav-icon fas fa-video"></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="nav-icon fas fa-th"></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="nav-icon fas fa-bell"></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-icon nav-link" href="#">
                  <img width="40" src={user}></img>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
