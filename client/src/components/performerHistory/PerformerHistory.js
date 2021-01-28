import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHistoryById } from '../../actions/performers';
import HistoryCard from './HistoryCard';

const PerformersHistoryById = ({
  getHistoryById,
  history: { performances },
  match,
}) => {
  useEffect(() => {
    getHistoryById(match.params.id);
  }, [getHistoryById, match.params.id]);

  return (
    <Fragment className='performanceHistory'>
      <h1 className='authstate'>Performance History</h1>
      {performances.map((performance) => (
        <HistoryCard key={performance._id} performances={performance} />
      ))}
    </Fragment>
  );
};

PerformersHistoryById.propTypes = {
  getHistoryById: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  history: state.history,
});

export default connect(mapStateToProps, { getHistoryById })(
  PerformersHistoryById
);
