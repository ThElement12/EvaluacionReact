import React, { Component } from 'react'

export default class ImageAPI extends Component {
    
    render(){
        return(
        <div className="imagesBox">
            <a href={this.props.image.urls.full} target="_blank" rel="noopener noreferrer">
                <img className= "img-thumbnail" src={this.props.image.urls.thumb} alt={this.props.image.alt_description}/>
                </a>
            
            <br/>
            <h6>{this.props.image.user.name}</h6>
        </div>)
    }
    
  
}
