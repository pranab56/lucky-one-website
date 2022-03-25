import React from 'react';

const Cart = (props) => {
    const {cart}=props;
   
    return (
        <div>
            <h3>name : {cart.name}</h3>
        </div>
    );
};

export default Cart;