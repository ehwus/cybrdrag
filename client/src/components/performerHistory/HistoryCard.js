import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HistoryCard = (performances) => {
  return (
    <div className='historyCard'>
      <h5>
        Performance earnings: {performances.performances.netearned}
        <i className='fas fa-dice-d20'></i>
      </h5>
      <h5>Performance time: {performances.performances.date}</h5>
    </div>
  );
};

HistoryCard.propTypes = {
  performances: PropTypes.object.isRequired,
};

export default HistoryCard;
