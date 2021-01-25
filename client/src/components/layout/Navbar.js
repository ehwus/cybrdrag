import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>
        <i className='fas fa-dice-d20'></i>CYBRDRAG
      </h1>
      <div className='navButtons'>
        <Link to='/login'>
          <button className='purpleButton'>Login</button>
        </Link>
        <Link to='/register'>
          <button className='purpleButton'>Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
