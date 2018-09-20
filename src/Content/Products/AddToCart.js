import React from 'react';

let cart = [];

const addToCart = (props) => {
    const handleClick = () => {
        if (localStorage.getItem('CartLocalStorage') !== null) {
            cart = JSON.parse(localStorage.getItem('CartLocalStorage'));
        }
        const product = props.product;
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        localStorage.setItem('CartLocalStorage', JSON.stringify(cart));
        alert(product.name + 'was added to cart.');
    }

    return (
        <div>
            <button onClick={handleClick.bind(this)}>Add to cart</button>
        </div>
    );
}

export default addToCart;
