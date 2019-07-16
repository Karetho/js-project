import React, { Component } from "react";
import { TableRow, TableCell } from "@material-ui/core";

class User extends Component {
  render() {
    const { _id, firstName, lastName, login, password } = this.props;
    return (
      <TableRow key={_id}>
        <TableCell component="th" scope="row">
          {firstName}
        </TableCell>
        <TableCell component="th" scope="row">
          {lastName}
        </TableCell>
        <TableCell component="th" scope="row">
          {login}
        </TableCell>
        <TableCell component="th" scope="row">
          {password}
        </TableCell>
      </TableRow>
    );
  }
}

export default User;
