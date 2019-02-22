import React from "react";
import Form from "../common/Form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    err: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .min(8)
      .required()
      .label("Password")
  };
  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password","password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
