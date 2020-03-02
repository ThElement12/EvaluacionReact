import React, { Component } from  'react'

export default class SearchBar extends Component {
    
    state ={
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
                
                <form onSubmit = {this.onSubmit}>
                <input
                type="text"
                name="search"
                placeholder="Search an Image"
                onChange={this.onChange}
                value={this.state.search}/>
                <button className="btn btn-primary" type="submit">
                    Search
                </button>
            </form>

            </div>
            
        )
    }
}
