import React from 'react';
import './Author.css';

const author = () => {
    return (
        <div className="widget-container">
            <div className="author-widget">
                <img src="https://ecwp.000webhostapp.com/wp-content/uploads/2018/09/author.jpg" alt="coolt" />
                <h3>John Doe</h3>
                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua.
                </p>
            </div>
        </div>
    )
}

export default author;
