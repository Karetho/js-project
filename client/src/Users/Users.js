import React, { Component } from "react";

import User from "./User";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: "" };
  }
  componentWillMount() {
    this.callUsers();
  }

  callUsers() {
    fetch("http://localhost:9000/users")
      .then(res => {
        return res.json();
      })
      .then(res => {
        const data = res.data.map(user => {
          return (
            <User
              firstName={user.firstName}
              lastName={user.lastName}
              className="user"
            />
          );
        });
        this.setState({ users: data });
      })
      .catch(err => err);
  }
  render() {
    return <div className="search">{this.state.users}</div>;
  }
}

export default Users;
