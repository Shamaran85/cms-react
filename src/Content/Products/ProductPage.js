import React, { Component } from 'react';
import './ProductPage.css';

import AddToCart from './AddToCart';
import Reviews from '../Reviews/Reviews';

import config from '../../config';

const url = config.productsUrl;

class ProductPage extends Component {
    state = {
        product: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(url + id)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    product: result,
                })
            })
    }

    render() {
        const product = this.state.product;
        if (product === null) {
            return null;
        }
        return (
            <div className="single-product">
                <div className="single-top">
                    <div className="single-product-left">
                        <div className="single-image">
                            <img src={config.imageUrl + product.image.url} alt={product.name} />
                        </div>
                    </div>

                    <div className="single-product-right">
                        <h2>{product.name}</h2>
                        <p className="single-price">${product.price}</p>
                        <p className="single-desc">{product.description}</p>

                        <p>Stock: {product.stock}</p>
                        <AddToCart product={product} />
                    </div>
                </div>


                <Reviews product={product} />

            </div>
        );
    }
}

export default ProductPage;
