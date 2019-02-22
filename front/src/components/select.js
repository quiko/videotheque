import React from "react";

const Select = ({ name, label, options,err, ...rest }) => {
  return (
    <div className="group-form">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control" >
      <option value="" />
      {options.map(option => (
        <option key={option._id} value={option._id}>
          {option.name}
        </option>
      ))}
      </select >
      {err && <div className='alert alert-danger'>{err}</div>}
    </div>
  );
};

export default Select;
