import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHistoryById } from '../../actions/performers';
import HistoryCard from "./HistoryCard";

const PerformersHistoryById = ({getHistoryById,
                          history: { performances },
                          match,
                        }) => {
  useEffect(() => {
    getHistoryById(match.params.id);
  }, [getHistoryById, match.params.id]);

  return (
    <Fragment>
    <div className='container'>
      <h1 className='authstate'>
          This is a test page
        {performances.map((performance) => (
          <HistoryCard key={performance._id} performances={performance}/>
        ))}
      </h1>

    </div>
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
