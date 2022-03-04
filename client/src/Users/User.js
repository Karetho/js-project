import React, { Component } from "react";
import { TableRow, TableCell, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class User extends Component {
  deleteUser(id) {
    fetch("http://localhost/api/users/delete/" + id).then(
      this.props.history.push("/users")
    );
  }
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
        <Tooltip title="Edit" aria-label="edit">
          <IconButton
            href={"/users/edit/" + _id}
            className="edit"
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" aria-label="delete">
          <IconButton
            onClick={this.deleteUser.bind(this, _id)}
            className="delete"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableRow>
    );
  }
}

export default User;
