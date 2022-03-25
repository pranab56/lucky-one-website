import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart}=props;
    return (
             <div className='phoneCart'>
            
                <img src={cart.image} alt="" /><h3 id='phone'>{cart.name}</h3> <FontAwesomeIcon id='icon' icon={faClose}></FontAwesomeIcon>
                
        </div>
       
    );
};

export default Cart;