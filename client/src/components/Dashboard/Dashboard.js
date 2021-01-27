import React from 'react';
// import PropTypes from 'prop-types';
import ShowAllButton from '../Buttons/ShowAllButton';
import TopThreePerformers from '../performers/TopThreePerformers';
import News from '../Events/News';

const Dashboard = (props) => {
  return (
    <div className='container'>
    <TopThreePerformers/>
      <ShowAllButton />
    <News />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
