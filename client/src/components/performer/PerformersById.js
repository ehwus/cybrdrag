import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPerformersById } from '../../actions/performers';
import PerformerProfile from './PerformerProfile';
import { getHistoryById } from '../../actions/performers';

const PerformersById = ({
  getPerformersById,
  getHistoryById,
  performers: { performers },
  history: { history },
  match,
}) => {
  useEffect(() => {
    getHistoryById(match.params.id);
    getPerformersById(match.params.id);
  }, [getPerformersById, match.params.id, getHistoryById]);
  return (
    <div className='container'>
      <h1 className='authstate'>
        <PerformerProfile
          key={performers._id}
          performer={performers}
          history={history}
        />
      </h1>
    </div>
  );
};

PerformersById.propTypes = {
  getPerformersById: PropTypes.func.isRequired,
  performers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  performers: state.performers,
});

export default connect(mapStateToProps, { getPerformersById, getHistoryById })(
  PerformersById
);
