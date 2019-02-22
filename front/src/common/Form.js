import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../components/input";
import Select from "../components/select"


class Form extends Component {
  state = {
    data: {},
    err: {}
  };
  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    if (!error) return null;
    const err = {};
    for (let item of error.details) err[item.path[0]] = item.message;
    return err;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = ({ currentTarget: input }) => {
    const err = { ...this.state.err };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) err[input.name] = errorMessage;
    else delete err[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, err });
  };
  handleSubmit = event => {
    event.preventDefault();
    const err = this.validate();
    this.setState({ err: err || {} });
    if (err) return;
    this.doSubmit();
  };
  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
  renderInput = (name, label, type = "text") => {
    const { data, err } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        name={name}
        value={data[name]}
        label={label}
        err={err[name]}
        type={type}
      />
    );
  };
  renderSelect = (name, label, options) => {
    const { data, err } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        err ={err[name]}
        
      />
    );
  };
}

export default Form;
