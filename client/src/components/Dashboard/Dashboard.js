import React from 'react';
// import PropTypes from 'prop-types';
import TopThreePerformers from '../performers/TopThreePerformers';
import CountdownToNextPerformance from '../Events/PerformanceCountdown';
import News from '../Events/News';

const Dashboard = (props) => {
  return (
    <div className='container'>
      <div className='dashboard'>
        <TopThreePerformers />
        <News />
      </div>
      <CountdownToNextPerformance />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
