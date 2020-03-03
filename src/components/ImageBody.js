import React from 'react'
import ImageAPI from './ImageAPI'
export default function ImageBody(props) {

    return (
        <div className="imagesBody">
                {props.results.map(item => (
                        <ImageAPI key={item.id} image={item}/>
                    ))}
            </div>
    )
}
