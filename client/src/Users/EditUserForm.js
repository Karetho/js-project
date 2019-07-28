import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      firstName: "",
      lastName: "",
      login: "",
      password: ""
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.findUser();
  }

  findUser() {
    fetch("http://localhost:9000/users/" + this.props.id)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          _id: res._id,
          firstName: res.firstName,
          lastName: res.lastName,
          login: res.login,
          password: res.password
        });
      })
      .catch(err => err);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleLoginChange(event) {
    this.setState({ login: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  postData(url = "", data = {}) {
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
  handleSubmit(event) {
    this.postData(
      "http://localhost:9000/users/update/" + this.state._id,
      this.state
    )
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    event.preventDefault();
    // this.context.router.history.push("/users");
    // <Redirect to="/target" />;
    alert("User has been updated");
  }
  render() {
    return (
      <div>
        <legend>Update user</legend>
        <form onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            value={this.state.login}
            onChange={this.handleLoginChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default EditUserForm;
