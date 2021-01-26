import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPerformers} from "../../actions/performers";
import PerformerCard from "./PerformerCard";

const Performers = ({getPerformers, performers: {performers, loading}}) => {
  useEffect(() => {
    getPerformers();
  }, [getPerformers]);

  return (
    <div className='container'>
      <h1 className='authstate'>Pick your Queen</h1>
      {performers.map(performer => (
        <PerformerCard key={performer._id} performer={performer}/>
      ))}
    </div>
  );
};


Performers.propTypes = {
  getPerformers: PropTypes.func.isRequired,
  performers: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  performers: state.performers
});

export default connect(mapStateToProps, {getPerformers})(Performers);


