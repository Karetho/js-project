import React, { Component } from "react";
import "./App.css";
import Users from "./Users/Users";
import { Router } from "@reach/router";
import Nav from "./Nav/Nav";
import CreateUserForm from "./Users/CreateUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", dbResponse: "", userResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
    this.callDB();
    this.callUsers();
  }
  callDB() {
    fetch("http://localhost:9000/testDB")
      .then(res => res.text())
      .then(res => this.setState({ dbResponse: res }))
      .catch(err => err);
  }
  callUsers() {
    fetch("http://localhost:9000/users")
      .then(res => res.text())
      .then(res => this.setState({ userResponse: res }))
      .catch(err => err);
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          Hello world
          <div className="content">
            <Router>
              <Users path="/users" />
              <CreateUserForm path="/users/create" />
            </Router>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
