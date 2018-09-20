import React from 'react';

const star = (props) => {

    const test = []
    for (let i = 0; i < props.review.rating; i++) {
        let star = <span className="fa fa-star" key={props.review.id + i}></span>;
        test.push(star);
    }

    return (
        <div className="star-rating">
            {test}
        </div>
    );
};

export default star;