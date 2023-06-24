import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <h1>Store</h1>
      </div>
      <div className="n-right">
       <button className='n-button'>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
