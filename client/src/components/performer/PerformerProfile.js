import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PerformerProfile = ({
  performer: { _id, name, worth, avatar },
  loading,
}) => {
  return (
    <Fragment>
      {loading ? (
        <h1> Loading </h1>
      ) : (
        <div className='performerProfile'>
          <div className='performerCard'>
            <img src={avatar} className='performerAvatar' alt='Avatar'></img>
            <div className='performerName'>{name}</div>
            <h1 className='performerWorth'>
              {worth}
              <i className='fas fa-dice-d20'></i>
            </h1>
            <div className='performerName'></div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

PerformerProfile.propTypes = {
  performer: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
};

export default PerformerProfile;
