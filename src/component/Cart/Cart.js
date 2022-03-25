import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart}=props;
    return (
             <div className='phoneCart'>
            
                <img src={cart.image} alt="" /><h3 id='phone'>{cart.name}</h3>
                
        </div>
       
    );
};

export default Cart;