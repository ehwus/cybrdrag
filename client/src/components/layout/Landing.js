import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='container'>
      <div className='landingBox'>
        <p>DO DRAG QUEENS DREAM OF ELECTRIC SHEEP?</p>
        <p>NO.</p>
        <p>DRAG QUEENS DON'T SLEEP!</p>
        <p>INVEST IN YOUR FAVOURITE PERFORMERS TODAY!</p>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
