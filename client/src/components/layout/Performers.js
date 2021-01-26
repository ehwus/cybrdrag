import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPerformers} from "../../actions/performers";
import PerformerCard from "./PerformerCard";

const Performers = ({getPerformers}) => {
  useEffect(() => {
    getPerformers();
  }, []);

  return (
    <div className='container'>
      <h1 className='authstate'>This should be a list of performers</h1>
    </div>
  );
};

Performers.propTypes = {
  getPerformers: PropTypes.func.isRequired,
  performer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  performer: state.performer
});

export default connect(mapStateToProps, {getPerformers})(Performers);


