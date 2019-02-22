import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({columns, onSort, sortColumn, data}) => {
    return (
        <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody data={data} columns ={columns} sortColumn ={sortColumn} />
      </table>
      );
}
 
export default Table;