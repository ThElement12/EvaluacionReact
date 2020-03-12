//Native Components
import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    search: ''
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.search(this.state.search)
  }

  render() {
    return (
      <div>
        <form className="search-container" onSubmit={this.onSubmit} >
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={this.onChange}
            value={this.state.search} />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
          <label>powered by <a href="http://www.unsplash.com">unsplash.com</a> API </label>
        </form>
      </div>
    )
  }
}
