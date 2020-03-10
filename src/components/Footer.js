//Native Component
import React from 'react';

export default function Footer(props) {
    return (
        <footer style={{ textAlign: "center" }}>
          <button className="btn btn-primary" onClick={props.previousPage}>{'<<'}</button>
          <button className="btn btn-primary" onClick={props.nextPage}>{'>>'}</button>
        </footer>
    )
}
