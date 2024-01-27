// Header.js
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <h1>My Web Store</h1>
      <div className="nav-buttons">
        <Button variant="success">Home</Button>
        <Button variant="success">Products</Button>
        <Button variant="success">Contact</Button>
      </div>
    </header>
  );
};

export default Header;
