import React, { Component } from 'react'
import ImageBody from './ImageBody';
import './App.css'

export default class LoadSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            search: this.props.search,
        }
    }
    componentDidMount() {
        fetch('https://api.unsplash.com/search/photos?per_page=15&query=' + this.state.search + '&client_id=1e71698fa290e8c33bb1d3e9028f187dda800d95272d649f6fdfc31a3b89071e')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.results,
                })

            });
    }

    render() {
        if (!this.state.isLoaded) {
            return (<h1>Loading...</h1>)
        }
        else {
            return (
                <div>
                    <ImageBody results={this.state.items} />
                </div>

            )

        }

    }
}
