import React from 'react';
import { Link } from "react-router-dom";

import config from '../../config';

const product = (props) => {
    return (
        <div className="product-card">
            <Link to={'products/' + props.product.id}>
                <div className="product-image">
                    <img src={config.imageUrl + props.product.image.url} alt={props.product.id} />
                    <span className='product-stock'>{props.product.stock}x</span>
                    <div className="product-image-overlay">
                        <div className='product-image-overlay-text'>
                            <p>Quick View</p>
                        </div>
                    </div>
                </div>
            </Link>
            <p className="product-category">{props.product.category}</p>
            <h2>
                <Link to={'products/' + props.product.id}>
                    {props.product.name}
                </Link>
            </h2>
            <p className="product-price">${props.product.price}</p>
        </div>
    )
}

export default product;
