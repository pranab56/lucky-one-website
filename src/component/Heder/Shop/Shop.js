import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';


import Phone from '../../Phone/Phone';
import './Shop.css'
const Shop = () => {
    const [products,setProduct]=useState([]);
    const [carts,setCart]=useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    const HandaleAddToCart=(product)=>{
        const newCart=[...carts,product];
        setCart(newCart);
    }
    const RendomButton=()=>{
      console.log('pronab');
    }
    return (
        <nav className='Shop'>
        <div className='product'>
        {
            products.map(product=><Phone 
                product={product}
                key={product.id}
                HandaleAddToCart={HandaleAddToCart}
                ></Phone>)
               
        }   
        </div>
        <div className='cart'>
            <h1 id='text'>Your phone</h1>
            
           
           {
               carts.map(cart=><Cart 
                cart={cart}
                key={cart.id}
                ></Cart>)
           }
        <button id='btn1' onClick={RendomButton}>choose 1 for me</button><br /><br />
        <button id='btn2'>choose again</button>
        </div>
        </nav>
    );
};

export default Shop;