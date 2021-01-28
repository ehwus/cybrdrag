import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPerformers } from '../../actions/performers';
import PerformerCard from './PerformerCard';
import { Link } from 'react-router-dom';

const TopThreePerformers = ({
  getPerformers,
  performers: { performers, laoding },
}) => {
  useEffect(() => {
    getPerformers();
  }, [getPerformers]);

  return (
    <div className='container'>
      <h1 className='dashboardTitle'>Top 3 Queens!</h1>
      {performers.slice(0, 3).map((performer) => (
        <PerformerCard key={performer._id} performer={performer} />
      ))}
      <Link to='/performers' className='purpleButton'>
        Show All
      </Link>
    </div>
  );
};

TopThreePerformers.propTypes = {
  getPerformers: PropTypes.func.isRequired,
  performers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  performers: state.performers,
});

export default connect(mapStateToProps, { getPerformers })(TopThreePerformers);
