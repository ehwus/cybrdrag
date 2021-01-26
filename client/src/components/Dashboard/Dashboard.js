import React from 'react';
import PerformerCard from '../performers/PerformerCard';
import PropTypes from 'prop-types';

let testPerformer = {
  name: `Testy O'Sterone`,
  worth: 3456,
  avatar: 'https://avatars.dicebear.com/4.5/api/female/dsfawerhtrs.svg',
};

const Dashboard = (props) => {
  return (
    <div className='container'>
      <h1 className='authstate'>
        Test Dashboard at components/dashboard/dashboard.js
      </h1>
      <PerformerCard performer={testPerformer} />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
