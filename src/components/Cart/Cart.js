import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    let shipping = 0
    if (total > 99) {
        shipping = 0;
    }
    else if (total > 25) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99
    }
    const tax = total / 10
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Item Orders: {cart.length}</p>
            <p>Product Price: {Math.round(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>tax + Vat: {Math.round(tax)}</small></p>
            <p>Total Price: {Math.round(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;