import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/App.css'
import LoadSeach from './components/LoadSeach';

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
          <div className="pageHeader">
            <h1>Image Search Machine <span role="img" aria-label="eyes">👀</span></h1>
            <Link to="/"><button className="btn btn-primary">Home</button></Link>
            <Link to="/about"><button className="btn btn-secondary">About us</button></Link>
          </div>
          <Route exact path="/" render={() => {
            return <LoadSeach/>
          }} />
          <Route exact path="/about" render={() => {
            return <div>
              <h1>About us</h1>
              <p>This project was done with the purpose of evaluating the "react" course and checking my skills. Happy Searching :D</p>
            </div>
          }} />
        </Router>

      </div>
    );
  }
}
