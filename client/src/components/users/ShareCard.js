import React from 'react';
import PropTypes from 'prop-types';

const ShareCard = ({ share }) => {
  return (
    <div>
    <img src={share.avatar} alt='' />
      {share.performername}
      {share.quantity}
    </div>
  )
}

ShareCard.propTypes ={
  share: PropTypes.object.isRequired,
};

export default ShareCard;
