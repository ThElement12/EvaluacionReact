import React, { Component } from 'react'
import ImageBody from './components/ImageBody'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/App.css'
import SearchBar from './components/SearchBar';

//TODO: Paginacion. Cambiando el state.page

export default class App extends Component {
  state = {
    search: '',
    submitted: false,
    page: 1,
    items: [],
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    })
    
  }
  previousPage = () => {
    if(this.state.page > 0){
      this.setState({
        page: this.state.page - 1
      })
    }

  }

  search = value => {

    fetch('https://api.unsplash.com/search/photos?page=' + this.state.page + '&per_page=15&query=' + value + '&client_id=1e71698fa290e8c33bb1d3e9028f187dda800d95272d649f6fdfc31a3b89071e')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json.results,
          submitted: true,
        })

      });
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
            return <div>
              <SearchBar className="searchContainer" search={this.search} />
              {this.state.submitted && <ImageBody results={this.state.items} />}
            </div>
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
