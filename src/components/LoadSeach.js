//Native Component
import React, { Component } from 'react';
//Component
import SearchBar from './SearchBar';
import Footer from './Footer'

export default class LoadSeach extends Component {

  state = {
    search: '',
    submitted: false,
    loading: true,
    page: 1,
    items: [],
    totalPages: 0,
  }
  //Fetching Functions
  componentDidMount() {
    this.setState({
      loading:true,
    });
    fetch('https://api.unsplash.com/photos/random?count=12&client_id=' + process.env.REACT_APP_UNSPLASH_ID)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          loading: false
        })
      });
  }
  search = value => {
    this.setState({
      loading:true,
    });
    fetch('https://api.unsplash.com/search/photos?page=' + this.state.page + '&per_page=15&query=' + value + '&client_id=' + process.env.REACT_APP_UNSPLASH_ID)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json.results,
          submitted: true,
          search: value,
          totalPages: json.total_pages,
          loading: false,
        })
      });
  }
  //Pagination functions
  nextPage = () => {
    if (this.state.page < this.state.totalPages) {
      this.setState({
        page: this.state.page + 1,
        items: [],
      })
    }
    this.search(this.state.search)
  }

  previousPage = () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
        items: [],
      })
      this.search(this.state.search)
    }
  }
  //Load images function
  imageBody = () => {
    
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    else if (this.state.items.length === 0 && this.state.submitted) {
      return (
        <div>
          <h6>Oh no! No results</h6>
        </div>
      )
    }
    
    else {
      return (
        <div className="images-body">
          {this.state.items.map(photo => (
            <div className="images-box" key={photo.id} >
              <a href={photo.urls.full} target="_blank" rel="noopener noreferrer">
                <img className="img-thumbnail" src={photo.urls.thumb} alt={photo.alt_description} />
              </a>
              <h6>Photo by <a href={photo.user.links.html} target="_blank" rel="noopener noreferrer">{photo.user.name}</a> on <a href="http://www.unsplash.com">Unsplash</a></h6>
            </div>
          ))}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <SearchBar className="search-container" search={this.search} />
        {this.imageBody()}
        {this.state.submitted && <Footer nextPage={this.nextPage} previousPage={this.previousPage} />}
      </div>
    )

  }
}
