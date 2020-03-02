import React from 'react'
import LoadSearch from './LoadSearch'

export default function SubmitSearch(props) {
    return (
        <div>
            <LoadSearch search={props.search}/>
        </div>
    )
}
