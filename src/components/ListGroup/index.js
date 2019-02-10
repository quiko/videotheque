import React from "react";

const ListGroupe = props => {
  const {
    items,
    valueProperty,
    nameProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <ul className="liste-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[nameProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroupe.defaultProps = {
  nameProperty: "name",
  valueProperty: "_id"
};

export default ListGroupe;
