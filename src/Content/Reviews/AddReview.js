import React, { Component } from 'react';

import config from '../../config';

const url = config.ratingsUrl;

const ratingArray = [
    { type: '1', value: 1 },
    { type: '2', value: 2 },
    { type: '3', value: 3 },
    { type: '4', value: 4 },
    { type: '5', value: 5 }
]

class AddReview extends Component {
    state = {
        userName: '',
        userReview: '',
        userRating: 1
    };

    handleUserReview(event) {
        this.setState({ userReview: event.target.value });
    }

    handleUserName(event) {
        this.setState({ userName: event.target.value });
    }

    handleUserRating(event) {
        this.setState({ userRating: event.target.value });
    }

    handleSubmit() {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productId: this.props.product.id,
                user: this.state.userName,
                review: this.state.userReview,
                rating: this.state.userRating
            })
        });
    }

    render() {
        const ratingValues = ratingArray.map((rating, index) => {
            return (
                <option key={index} value={rating.value}>
                    {rating.type}
                </option>
            );
        });
        return (
            <div className="review-form">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <select className="uno" value={this.state.userRating} onChange={this.handleUserRating.bind(this)} placeholder="Your name..">
                        {ratingValues}
                    </select>
                    <input className="dos" type="text" value={this.state.userName} onChange={this.handleUserName.bind(this)} placeholder="Your name.." />
                    <textarea value={this.state.userReview} onChange={this.handleUserReview.bind(this)} rows="8" cols="50" placeholder="Your review.." />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddReview;


