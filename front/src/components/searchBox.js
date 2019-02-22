import React from "react";
const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className="form-control my-3"
      type="text"
      name="query"
      placeholder="search for..."
      value={value}
      onChange= {event => onChange(event.currentTarget.value)}
    />
  );
};

export default SearchBox;
