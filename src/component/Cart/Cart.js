import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart,random,remove}=props;

    return (
            <nav className='cartItam'>
                <h1 id='text'>Selected phone</h1>
                 <div className='phoneCart'>
            
           {
               cart.map(cert=><h4 key={cert.id}>{cert.name}</h4>)
           }
           
        </div>
        <div>
        <button onClick={random} id='btn1'>choose 1 for me</button><br /><br />
        <button onClick={remove} id='btn2'>choose again</button>
        </div>
            </nav>
           
    );
    
};

export default Cart;