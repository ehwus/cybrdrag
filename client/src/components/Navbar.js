import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>
        <i className='fas fa-dice-d20'></i>CYBRDRAG
      </h1>
      <div className='authbuttons'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/register'>
          <button>Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
