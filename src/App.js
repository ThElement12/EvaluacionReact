import React, { Component } from 'react'
import LoadSearch from './LoadSearch'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css'

export default class App extends Component {
  state = {
      search: '',
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
    
  }
  onChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  render() {
    
    return (
      <div className="container">
        <Router>
        <div  className="pageHeader">
          <h1>🏎SUPER CARS🏎</h1>
          <Link to="/"><button className="btn btn-primary">Home</button></Link>
          <Link to="/about"><button className="btn btn-secondary">About us</button></Link>
        </div>
        <Route exact path="/" render={() =>{
          return <LoadSearch/>;
        }}/>
        <Route exact path="/about" render={() =>{
          return <div>
           <h1>About us</h1>
           <p>This project was done with the purpose of evaluating the "react" course and checking my skills. I love red cars :D</p> 
          </div>
        }}/>
        </Router>
        
      </div>
    );
  }
}
