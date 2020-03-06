import React, { Component } from 'react'
import ImageBody from './ImageBody'
import SearchBar from './SearchBar';

///TODO: Fix First Call of Next Page Keep The Same Page
export default class LoadSeach extends Component {

  state = {
    search: '',
    submitted: false,
    page: 1,
    items: [],
    totalPages: 0,
  }

  nextPage = () => {

    if (this.state.page < this.state.totalPages) {
      this.setState({
        page: this.state.page + 1,
        //submitted: false,
      })

    }
    this.search(this.state.search)

  }
  previousPage = () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
        //submitted: false,
      })
      this.search(this.state.search)
    }

  }

  search = value => {

    fetch('https://api.unsplash.com/search/photos?page=' + this.state.page + '&per_page=15&query=' + value + '&client_id=1e71698fa290e8c33bb1d3e9028f187dda800d95272d649f6fdfc31a3b89071e')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json.results,
          submitted: true,
          search: value,
          totalPages: json.total_pages
        })

      });

  }

  render() {
    
    if (this.state.items.length === 0 && this.state.submitted) {
      return (
        <div>
          <SearchBar className="searchContainer" search={this.search} />
          <h6>Oh no! No hubo resultados :(</h6>
        </div>
      )
    }
    else {
      return (
        <div>
          {console.log("pagina " + this.state.page)}
          <SearchBar className="searchContainer" search={this.search} />
          {!this.state.submitted && <h1>Welcome</h1>}
          {this.state.submitted && <ImageBody results={this.state.items} />}
          {this.state.submitted && <footer style={{ textAlign: "center" }}>
            <button className="btn btn-primary" onClick={this.previousPage}>{'<<'}</button>
            <button className="btn btn-primary" onClick={this.nextPage}>{'>>'}</button>
          </footer>}
        </div>
      )

    }

  }
}
