import React from 'react';
import './Checkout.css';

const cart = (props) => {
    return (
        <div className="checkout-item">
            <div className="item-name">
                {props.item.name}
            </div>
            <div className="item-quantity">
                {props.item.quantity}
            </div>
            <div className="item-price">
                ${props.item.price * props.item.quantity}
            </div>
        </div>
    )
}

export default cart
