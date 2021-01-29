import React from 'react';
import { Redirect } from 'react-router-dom';
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
        <p className='landingDescription'>
          Cybrdrag is the new streaming platform from jeffCorp, and you're
          invited to be an angel investor.
        </p>
        <p className='landingDescription'>
          Invest in performers that you love, and help them stave off a
          mandatory labour reassignment to our Mars Colonies.
        </p>
        <p className='landingDescription'>
          Nothing is free. jeffCoins get you shares, but invest wisely.
        </p>
        <p className='landingDescription'>
          Queens perform on the hour every hour.
        </p>
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
