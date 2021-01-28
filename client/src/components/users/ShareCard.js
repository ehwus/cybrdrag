import React from 'react';
import PropTypes from 'prop-types';

const ShareCard = ({ share }) => {
  return (
    <div className='shareCard'>
      <img src={share.avatar} className='' alt='' />
      <div>PERFORMER: {share.performername}</div>
      <div>QUANTITY: {share.quantity}</div>
    </div>
  );
};

ShareCard.propTypes = {
  share: PropTypes.object.isRequired,
};

export default ShareCard;
