import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <div className='userCard'>
      <h1 className='dashboardTitle'>PROFILE</h1>
      <div className='username'>Username: {user.username}</div>
      <div className='userBalance'>
        Balance: {user.balance}
        <i className='fas fa-dice-d20'></i>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
