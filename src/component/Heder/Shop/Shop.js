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
        if(newCart.length<=4){
            setCart(newCart);
        }
        else{
            alert('sorry you can not add more then phone!!')
        }
       
    }
   const randomItam=()=>{
    const random=carts[Math.floor(Math.random()*carts.length)];
        setCart([random]);        
   }
   const removeitam=()=>{
       setCart([]);
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
            
         <Cart cart={carts} random={randomItam} remove={removeitam}></Cart>
        
        </div>
        </nav>
    );
};

export default Shop;