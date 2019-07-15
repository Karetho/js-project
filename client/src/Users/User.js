import React, { Component } from "react";

class User extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    );
  }
}

export default User;
