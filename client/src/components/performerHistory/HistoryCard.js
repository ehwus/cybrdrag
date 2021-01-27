import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const HistoryCard = (history) => {
  return (
    <Fragment>
      <div className='performerCard'>
        <h1>Is this displaying?</h1>
        <h1>
          {console.log(history)}
          {history.netearned}
        </h1>
        <h1>
          {history.date}
        </h1>
      </div>
    </Fragment>
  );
};

HistoryCard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HistoryCard;
