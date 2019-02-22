import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/registrationForm";
import "./App.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
      <main className="App">
        <Switch>
          <Route path ="/login"  component ={LoginForm}/>
          <Route path ="/register" component = {RegistrationForm}/>
          <Route path="/movies/:id" component ={MovieForm}/>
          <Route path="/movies" component={Movies} />
          <Route  exact path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Redirect from="/" exact to="/movies" />
        </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
