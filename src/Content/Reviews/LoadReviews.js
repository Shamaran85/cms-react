import React, { Component } from 'react';
import config from '../../config';

import Star from './Star';

// const url = config.ratingsUrl;
// const url = config.loadRatingsUrl;
const url = config.ratingsLoad;

class LoadReviews extends Component {
    state = {
        reviews: []
    };

    componentDidMount() {
        this.fetchUrl();

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.product.id !== this.props.product.id) {
            this.fetchUrl();
        }
    }

    fetchUrl() {
        fetch(url + this.props.product.id)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    reviews: result,
                })
            })
    }

    render() {
        const reviews = this.state.reviews.map((review, index) => {

            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            let today = new Date(review.createdAt);
            return (
                <div className="product-review" key={review.id}>
                    <p className="review-user">{review.user}</p>

                    <Star review={review} index={index} />

                    <p className="review-review">{review.review}</p>
                    <p className="review-date">{today.toLocaleDateString("en-US", options)}</p>

                </div>
            )
        });
        return (
            <div>
                {reviews}
            </div>
        );
    }
}

export default LoadReviews;
