import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import Pagination from "../pagination";
import MoviesTable from "./moviesTable";
import MovieForm from "../movieForm";
import { paginate } from "../../utils/paginate";
import ListGroup from "../ListGroup/index";
import SearchBox from "../searchBox";
import _ from "lodash";


class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      selectedGenre: null,
      searchQuery:"",
      sortColumn: { column: "title", ordre: "asc" }
    };
  }
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ genres, movies: getMovies() });
  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(item => item._id !== movie._id);
    this.setState({
      movies
    });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleSelect = item => {
    this.setState({
      selectedGenre: item,
      currentPage: 1,
      searchQuery:""
    });
  };
  handleSort = sortColumn => {
    this.setState({
      sortColumn
    });
  };
  handlSearch = query =>{
     this.setState({
      searchQuery :query,
      selectedGenre: null,
      currentPage:1
    })
  }
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      movies: allMovies,
      sortColumn
    } = this.state;
    let filtred = allMovies;
    if(searchQuery)
    filtred = allMovies.filter(movie=>{
      return movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    });
    else if(selectedGenre && selectedGenre._id)
    filtred = allMovies.filter(movie=>{
     return  movie.genre._id === selectedGenre._id
    })
    const sorted = _.orderBy(filtred, [sortColumn.column], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtred.length, movies };
  };
  render() {
    const count = this.state.movies.length;
    const { pageSize, currentPage, sortColumn , searchQuery} = this.state;
    if (count === 0) return <p> There is no movies left in the database</p>;
    const { totalCount, movies } = this.getPageData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            component={MovieForm}
            className="btn btn-primary"
          >
            new movie
          </Link>
          <p> Showing {totalCount} movie in the database</p>
          <SearchBox value={searchQuery} onChange={this.handlSearch}/>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
