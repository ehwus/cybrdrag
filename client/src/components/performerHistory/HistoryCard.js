import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const HistoryCard = (performances) => {
  let date = new Date(Date.parse(performances.performances.date));

  return (
    <div className='historyCard'>
      <div className='performanceTime'>
        Performance at &nbsp;
        <Moment date={date} format='HH:MM on DD/MM/YY' />
      </div>
      <div className='performanceEarnings'>
        Earned: {performances.performances.netearned}
        <i className='fas fa-dice-d20'></i>
      </div>
    </div>
  );
};

HistoryCard.propTypes = {
  performances: PropTypes.object.isRequired,
};

export default HistoryCard;
