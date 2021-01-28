import React from 'react';
import PropTypes from 'prop-types';


const UserCard = ({ user }) => {
    return (
      <div>
        {user.username}
        {user.balance}
      </div>
    )
};

UserCard.propTypes ={
  user: PropTypes.object.isRequired,
};

export default UserCard;
