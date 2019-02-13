import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "../../common/Like";
import Table from "../../common/Table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "genre" },
    { path: "numberInStock", label: "stock" },
    { path: "dailyRentalRate", label: "rate" },
    {
      key: "Like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
