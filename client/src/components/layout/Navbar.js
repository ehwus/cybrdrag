import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authlinks = (
    <div className='navButtons'>
      <button className='purpleButton' onClick={logout}>
        Logout
      </button>
    </div>
  );

  const guestlinks = (
    <div className='navButtons'>
      <Link to='/login'>
        <button className='purpleButton'>Login</button>
      </Link>
      <Link to='/register'>
        <button className='purpleButton'>Register</button>
      </Link>
    </div>
  );
  return (
    <nav>
      <h1 className='logo'>
        <Link to='/dashboard'>
          <i className='fas fa-dice-d20'></i>CYBRDRAG
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authlinks : guestlinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
