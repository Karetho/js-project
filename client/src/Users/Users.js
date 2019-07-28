import React, { Component } from "react";

import User from "./User";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: "" };
  }
  componentDidMount() {
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
              _id={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              login={user.login}
              password={user.password}
              className="user"
            />
          );
        });
        this.setState({ users: data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="search">
        <Paper>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Login</TableCell>
                <TableCell>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.state.users}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Users;
