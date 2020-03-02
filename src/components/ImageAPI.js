import React from 'react'

export default function ImageAPI(props) {
    return (
        <div className="imagesBox">
            <a href={props.image.urls.full} target="_blank" rel="noopener noreferrer">
                <img className= "img-thumbnail" src={props.image.urls.thumb} alt={props.image.alt_description}/>
                </a>
            
            <br/>
            <h6>{props.image.user.name}</h6>
        </div>
    )
}
