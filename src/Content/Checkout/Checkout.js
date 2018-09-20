import React, { Component } from 'react';
import config from '../../config';

import Cart from './Cart';
import CheckoutForm from './CheckoutForm';

const url = config.orderUrl;

class Checkout extends Component {

    state = {
        userName: '',
        userAdress: '',
        userEmail: '',
        userPrice: null,
        cart: JSON.parse(localStorage.getItem('CartLocalStorage')) || []
    };

    componentDidMount() {
        const cart = this.state.cart;
        let newCart = [];
        let hash = {}

        for (let key in cart) {
            let val = cart[key];
            if (hash[val.id]) {
                hash[val.id].quantity = hash[val.id].quantity + 1;
            } else {
                newCart.push(val)
                hash[val.id] = val;
            }
        }
        this.setState({ cart: newCart });
        this.countTotalPrice();
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.userName,
                adress: this.state.userAdress,
                email: this.state.userEmail,
                cart: this.state.cart,
                total: this.state.userPrice
            })
        });
        localStorage.clear();
        this.props.history.push('/complete');
    }

    countTotalPrice() {
        const price = this.state.cart.reduce((a, b) => a + Math.round(b.price * b.quantity), 0);
        this.setState({ userPrice: price });
        return price;
    }

    render() {
        const totalPrice = this.state.cart.reduce((a, b) => a + Math.round(b.price * b.quantity), 0);
        const cartItems = this.state.cart.map((item, index) => {
            return <Cart key={index} item={item} />
        });
        return (
            <div className="checkout-container">


                <div className="checkout-cart">
                    <div className="checkout-item">
                        <div className="item-name bold">Name </div>
                        <div className="item-quantity bold">Qta</div>
                        <div className="item-price bold">Price</div>
                    </div>
                    {cartItems}
                    <div className="checkout-item">
                        <div className="item-name bold">Total: </div>
                        <div className="item-quantity"></div>
                        <div className="item-price bold">${totalPrice}</div>
                    </div>
                </div>

                <div className="checkout-form">
                    <CheckoutForm
                        handleSubmit={this.handleSubmit.bind(this)}
                        handleChange={(event) => this.handleChange(event)}
                        value={this.state.value}
                    />
                </div>

            </div >
        );
    }
}

export default Checkout;
