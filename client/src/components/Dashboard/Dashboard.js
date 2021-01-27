import React from 'react';
// import PropTypes from 'prop-types';
import ShowAllButton from '../Buttons/ShowAllButton';
import TopThreePerformers from '../performers/TopThreePerformers';

const Dashboard = (props) => {
  return (
    <div className='container'>
    <TopThreePerformers/>
      <ShowAllButton />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
