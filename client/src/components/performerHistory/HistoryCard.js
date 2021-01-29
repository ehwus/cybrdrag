import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const HistoryCard = (performances) => {
  let date = new Date(Date.parse(performances.performances.date));

  return (
    <div className='historyCard'>
      <div className='performanceTime'>
        Performance at &nbsp;
        <Moment date={date} format='HH:MM on DD/MM/YY' />
      </div>
      <h5>
        Earned: {performances.performances.netearned}
        <i className='fas fa-dice-d20'></i>
      </h5>
    </div>
  );
};

HistoryCard.propTypes = {
  performances: PropTypes.object.isRequired,
};

export default HistoryCard;
