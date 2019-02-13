import React, { Component } from "react";


class TableHeader extends Component {
  raiseSort = column => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === column)
      sortColumn.order = sortColumn === "asc" ? "desc" : "asc";
    else {
      sortColumn.column = column;
      sortColumn.ordre = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = column => {
    const {sortColumn} = this.props;
    if (column.path !== sortColumn.column) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => {
            return (
              <th
                className ='clickable'
                key={column.path || column._id}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
                {this.renderSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
