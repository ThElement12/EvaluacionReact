//Native Components
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//CSS
import './css/App.css'

//Components
import LoadSeach from './components/LoadSeach';
import About from './components/About';

export default class App extends Component {
  state = {
    search: '',
    submitted: false,
    page: 1,
    items: [],
    totalPages: 0,
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div className="page-header">
            <h1>Welcome to Image Search Engine</h1> 
            <Link to="/"><button className="btn btn-primary">Home</button></Link>
            <Link to="/about"><button className="btn btn-secondary">About us</button></Link>
          </div>
          <Route exact path="/" component={LoadSeach}/>
          <Route exact path="/about" component={About}/>
        </Router>
      </div>
    );
  }
}
