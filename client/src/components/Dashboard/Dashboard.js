import React from 'react';
// import PropTypes from 'prop-types';
import TopThreePerformers from '../performers/TopThreePerformers';
import News from '../Events/News';

const Dashboard = (props) => {
  return (
    <div className='container'>
      <div className='dashboard'>
        <TopThreePerformers />
        <News />
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
