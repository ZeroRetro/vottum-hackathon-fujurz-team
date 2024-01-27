import React from 'react';

const Product = ({ name, price, addToCart }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
