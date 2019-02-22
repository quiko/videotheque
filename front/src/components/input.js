import React from "react";

const Input = ({ name, label, err, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name ={name}id={name} className="form-control" />
      {err && <div className="alert alert-danger">{err}</div>}
    </div>
  );
};

export default Input;
