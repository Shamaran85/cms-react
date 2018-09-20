import React from 'react';
import './Reviews.css';

import AddReview from './AddReview';
import LoadReview from './LoadReviews';

const reviews = (props) => {
    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <div className="reviews-header-title">
                    <h2>Reviews</h2>
                </div>
            </div>
            <div className="single-bottom">
                <div className="single-product-reviews">
                    <div className="reviews-left">
                        <LoadReview product={props.product} />
                    </div>
                    <div className="reviews-right">
                        <AddReview product={props.product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default reviews;
