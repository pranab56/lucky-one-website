import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart}=props;
  
   
    return (
             <div className='cart'>
            <ul>
                <li>
                <h3 id='phone'> {cart}</h3>
                </li>
            </ul>
        </div>
       
    );
};

export default Cart;