// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';
import Cart from './Cart';
import Footer from './Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 }
  ];

  const addToCart = product => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  const removeFromCart = productId => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Featured Products</h2>
        <div className="products">
          {products.map(product => (
            <Product key={product.id} name={product.name} price={product.price} addToCart={() => addToCart(product)} />
          ))}
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
