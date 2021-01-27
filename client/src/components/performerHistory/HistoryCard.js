import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const HistoryCard = (history) => {
  return (
    <div className='performerCard'>
      <h1>Is this displaying?</h1>
      <h1>
        {history.netearned}
      </h1>
      <h1>
        {history.date}
      </h1>
    </div>
  );
};

HistoryCard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HistoryCard;
