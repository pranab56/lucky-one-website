import React from 'react';
import './Phone.css'
const Phone = (props) => {
    const {image,id,price,name}=props.product;
   const {HandaleAddToCart}=props
    return (
        <div className='allPhone'>
            <img src={image} alt="" />
            <div className='text'>
            <h4>ID : {id}</h4>
            <h4>NAME : {name}</h4>
            <h4>PRICE : {price}</h4>
            </div>
            <button onClick={()=>HandaleAddToCart(props.product.name)}>Add To Cart</button>
        </div>
    );
};

export default Phone;