//Native Component
import React from 'react';
import ReactTooltip from 'react-tooltip';



export default function Footer(props) {
    return (
        <footer style={{ textAlign: "center" }}>
          <ReactTooltip/>
          <button className="btn btn-primary" onClick={props.previousPage} data-tip="Previous Page">&#x021FD;</button>
          <button className="btn btn-primary" onClick={props.nextPage} data-tip="Next Page">&#x021FE;</button>
        </footer>
    )
}
