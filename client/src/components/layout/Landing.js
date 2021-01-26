import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({isAuthenticated}) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard'/>;
  }

  return (
    <div className='container'>
      <h1 className='authstate'>Test Landing Page found at /components/layout/Landing.js</h1>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);