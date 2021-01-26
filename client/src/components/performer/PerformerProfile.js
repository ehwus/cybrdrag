import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const PerformerProfile = ({ performer: { _id, name, worth, avatar, performancehistory } }) => {
  console.log(performancehistory)
  return (
    <div className='performerCard'>
      <img src={avatar} className='performerAvatar' alt='Avatar'></img>
      <div className='performerName'>{name}</div>
      <h1 className='performerWorth'>
        {worth}
        <i className='fas fa-dice-d20'></i>
      </h1>
      <div className='performerName'></div>
    </div>
  );
};

PerformerProfile.propTypes = {
  performer: PropTypes.object.isRequired,
};

export default PerformerProfile;
