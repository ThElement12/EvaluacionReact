import React, { Component } from 'react'
import ImageAPI from './ImageAPI';

export default class ImageBody extends Component {
   
    render() {
        
        return (
            <div className="imagesBody">
                {this.props.results.map(item => (
                        <ImageAPI key={item.id} image={item}/>
                    ))}
            </div>
        )
    }
}
