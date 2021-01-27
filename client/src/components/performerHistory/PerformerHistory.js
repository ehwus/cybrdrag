import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHistoryById } from '../../actions/performers';
import HistoryCard from "./HistoryCard";

const PerformersHistoryById = ({getHistoryById,
                          history,
                          match,
                        }) => {
  useEffect(() => {
    getHistoryById(match.params.id);
  }, [getHistoryById, match.params.id]);

  console.log(history);
  return (
    <Fragment>
    <div className='container'>
      <h1 className='authstate'>
          This is a test page
        {/*{history.map((history, i) => (*/}
        {/*  <HistoryCard key={i} history={history}/>*/}
        {/*))}*/}
      </h1>

    </div>
    </Fragment>
  );
};

PerformersHistoryById.propTypes = {
  getHistoryById: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  performers: state.performers,
});

export default connect(mapStateToProps, { getHistoryById })(
  PerformersHistoryById
);
